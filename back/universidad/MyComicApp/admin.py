from django.contrib import admin
from .models import User, Role, Category, Product, Order, OrderItem

class UserAdmin(admin.ModelAdmin):
    list_display = ('id_users', 'first_name', 'last_name', 'email', 'address', 'image', 'display_orders')

    def display_orders(self, obj):
        return ", ".join([str(order.id_order) for order in obj.orders.all()])

    display_orders.short_description = 'Orders'

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id_users', 'first_name', 'last_name', 'email', 'address', 'image')

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ('id_role', 'name', 'user')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id_category', 'name')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id_product', 'name', 'description', 'price', 'discount', 'stock', 'image', 'pages', 'format', 'weight', 'isbn', 'category')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id_order', 'id_user', 'state', 'order_date', 'payment_method', 'shipping_method', 'payment_status', 'total_amount')

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id_order_items', 'quantity', 'product', 'order')