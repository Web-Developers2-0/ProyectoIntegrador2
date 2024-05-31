from rest_framework import serializers

from .models import User,Product, Category

from .models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Order, OrderItem
from decimal import Decimal
from django.utils import timezone

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'password', 'address','phone', 'image']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            address=validated_data['address'],
            phone=validated_data['phone'],
            image=validated_data.get('image')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.address = validated_data.get('address', instance.address)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.image = validated_data.get('image', instance.image)

        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)
        
        instance.save()
        return instance

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        return token

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

#ORDENES SERIALIZERS  
class OrderItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']


class OrderCreateSerializer(serializers.ModelSerializer):
    order_items = OrderItemCreateSerializer(many=True)

    class Meta:
        model = Order
        fields = ['state', 'payment_method', 'shipping_method', 'payment_status', 'total_amount', 'order_items']

    def validate(self, attrs):
        attrs.setdefault('state', 'in_progress')
        attrs.setdefault('order_date', timezone.now().date())
        attrs.setdefault('payment_method', 'credit_card')
        attrs.setdefault('shipping_method', 'express')
        attrs.setdefault('payment_status', 'pagado')
        return super().validate(attrs)

    def create(self, validated_data):
        order_items_data = validated_data.pop('order_items')
        
        total_amount = Decimal(0)
        
        # Iterar sobre los elementos del pedido (OrderItems)
        for order_item_data in order_items_data:
            product = order_item_data['product']
            quantity = order_item_data['quantity']
            
            # Multiplicar el precio del producto por la cantidad
            subtotal = product.price * quantity
            total_amount += subtotal
        
        # Crear la orden con el total_amount calculado
        validated_data['total_amount'] = total_amount
        order = Order.objects.create(**validated_data)
        
        # Crear los elementos del pedido (OrderItems)
        for order_item_data in order_items_data:
            OrderItem.objects.create(order=order, **order_item_data)
        
        return order
    
    
#Orden item serializers    
class OrderItemSerializer(serializers.ModelSerializer):
    product = serializers.StringRelatedField()

    class Meta:
        model = OrderItem
        fields = ['id_order_items', 'product', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)
    user = serializers.StringRelatedField()

    class Meta:
        model = Order
        fields = ['id_order', 'user', 'state', 'order_date', 'payment_method', 'shipping_method', 'payment_status', 'total_amount', 'order_items']