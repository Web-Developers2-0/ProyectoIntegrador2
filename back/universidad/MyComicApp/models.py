from django.db import models

class User(models.Model):
    id_users = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45, blank=False)
    last_name = models.CharField(max_length=45, blank=False)
    email = models.CharField(max_length=45, blank=False, unique=True)
    password = models.CharField(max_length=45, blank=False)
    address = models.CharField(max_length=45, blank=True, null=True)
    image = models.CharField(max_length=255, blank=True, null=True)
    orders = models.ManyToManyField('Order', related_name='users', blank=True)
    role = models.ForeignKey('Role', on_delete=models.CASCADE, related_name='users', blank=True, null=True)
    
    class Meta:
        db_table = 'users'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def _str_(self):
        return f'{self.first_name} {self.last_name}'
    
class Role(models.Model):
    id_role = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=False)
    
    class Meta:
        db_table = 'roles'
        verbose_name = 'Role'
        verbose_name_plural = 'Roles'

    def _str_(self):
        return self.name
    
class Category(models.Model):
    id_category = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=False)
    
    class Meta:
        db_table = 'categories'
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        
    def _str_(self):
        return self.name    


class Product(models.Model):
    id_product = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.CharField(max_length=255, blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False)
    discount = models.IntegerField(blank=True, null=True)
    stock = models.IntegerField(blank=False)
    image = models.CharField(max_length=255, blank=True, null=True)
    pages = models.IntegerField(blank=True, null=True)
    format = models.CharField(max_length=45, blank=True, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    isbn = models.CharField(max_length=45, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    calification = models.IntegerField(blank=True, null=True)
    
    class Meta: 
        db_table = 'products'
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        
    def _str_(self):
        return self.name


class Order(models.Model):
    id_order = models.AutoField(primary_key=True)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, db_column='user_id')
    state = models.CharField(max_length=45, blank=False)
    order_date = models.DateField(null=True)
    payment_method = models.CharField(max_length=45, blank=False)
    shipping_method = models.CharField(max_length=45, null=True)
    payment_status = models.CharField(max_length=45, null=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True)

    class Meta:
        db_table = 'orders'
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def _str_(self):
        return f'Order {self.id_order}'

class OrderItem(models.Model):
    id_order_items = models.AutoField(primary_key=True)
    quantity = models.IntegerField(blank=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name='order_items')
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'order_items'
        verbose_name = 'Order Item'
        verbose_name_plural = 'Order Items'
        
    def _str_(self):
        return f'{self.quantity} of {self.product.name} in Order {self.order.id_order}'