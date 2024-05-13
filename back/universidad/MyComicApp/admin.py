from django.contrib import admin
from .models import User, Role, Category, Product, Order, OrderItem


class UserAdmin(admin.ModelAdmin):
    list_display = ('id_users', 'first_name', 'last_name', 'email', 'address', 'image', 'display_orders')

    def display_orders(self, obj):
        return ", ".join([str(order.id_order) for order in obj.orders.all()])

    display_orders.short_description = 'Orders'

admin.site.register(User,UserAdmin)



class RoleAdmin(admin.ModelAdmin):
    list_display = ('id_role', 'name')

admin.site.register(Role,RoleAdmin)



class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id_category', 'name')

admin.site.register(Category,CategoryAdmin)



class ProductAdmin(admin.ModelAdmin):
    list_display = ('id_product', 'name', 'description', 'price', 'discount', 'stock', 'image', 'pages', 'format', 'weight', 'isbn', 'category')

admin.site.register(Product,ProductAdmin)


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id_order', 'id_user', 'state', 'order_date', 'payment_method', 'shipping_method', 'payment_status', 'total_amount')

admin.site.register(Order,OrderAdmin)


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id_order_items', 'quantity', 'product', 'order')
    
    
admin.site.register(OrderItem,OrderItemAdmin)