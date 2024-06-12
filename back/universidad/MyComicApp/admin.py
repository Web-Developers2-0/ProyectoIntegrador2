from django.contrib import admin
from .models import User, Role, Category, Product, Order, OrderItem
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Permission


#USERS
""" 
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'address', 'image', 'display_orders', 'role')
    filter_horizontal = ('user_permissions',)
    def display_orders(self, obj):
        return ", ".join([str(order.id_order) for order in obj.orders.all()])
    display_orders.short_description = 'Orders'

    
    def has_add_permission(self, request):
        
        if request.user.groups.filter(name='Vendedor').exists():
            return False
        
        return True

    
    def has_change_permission(self, request, obj=None):
        
        if request.user.groups.filter(name='Vendedor').exists():
            return False
        
        return True

    
    def has_delete_permission(self, request, obj=None):
        
        if request.user.groups.filter(name='Vendedor').exists():
            return False
        
        return True

    
    def has_view_permission(self, request, obj=None):
        
        if request.user.groups.filter(name='Vendedor').exists():
            return True
       
        return super().has_view_permission(request, obj)


admin.site.register(User, UserAdmin)


class RoleAdmin(admin.ModelAdmin):
    list_display = ('id_role', 'name')


admin.site.register(Role, RoleAdmin) """
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Role

class UserAdmin(BaseUserAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'address', 'image', 'display_orders', 'role', 'is_staff', 'is_superuser')
    list_filter = ('is_staff', 'is_superuser')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'address', 'phone', 'image')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'role')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'address', 'phone', 'role', 'password1', 'password2', 'is_staff', 'is_superuser'),
        }),
    )
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ()

    def display_orders(self, obj):
        return ", ".join([str(order.id_order) for order in obj.user_orders()])

    display_orders.short_description = 'Orders'

admin.site.register(User, UserAdmin)

class RoleAdmin(admin.ModelAdmin):
    list_display = ('id_role', 'name')

admin.site.register(Role, RoleAdmin)


# USERS

""" from django.contrib import admin
from .models import User, Role

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'address', 'image', 'display_orders', 'role')
    filter_horizontal = ('user_permissions',)

    def display_orders(self, obj):
        return ", ".join([str(order.id_order) for order in obj.orders.all()])
    display_orders.short_description = 'Orders'

    def has_add_permission(self, request):
        # Solo permitir a los superusuarios crear usuarios
        if request.user.is_superuser:
            return True
        # Restringir a los usuarios del grupo 'Vendedor'
        if request.user.groups.filter(name='Vendedor').exists():
            return False
        return True

    def has_change_permission(self, request, obj=None):
        # Solo permitir a los superusuarios modificar usuarios
        if request.user.is_superuser:
            return True
        # Restringir a los usuarios del grupo 'Vendedor'
        if request.user.groups.filter(name='Vendedor').exists():
            return False
        return True

    def has_delete_permission(self, request, obj=None):
        # Solo permitir a los superusuarios eliminar usuarios
        if request.user.is_superuser:
            return True
        # Restringir a los usuarios del grupo 'Vendedor'
        if request.user.groups.filter(name='Vendedor').exists():
            return False
        return True

    def has_view_permission(self, request, obj=None):
        # Permitir a los usuarios del grupo 'Vendedor' ver usuarios
        if request.user.groups.filter(name='Vendedor').exists():
            return True
        return super().has_view_permission(request, obj)

admin.site.register(User, UserAdmin)

class RoleAdmin(admin.ModelAdmin):
    list_display = ('id_role', 'name')

admin.site.register(Role, RoleAdmin) """


#PRODRUCTS

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id_category', 'name')

admin.site.register(Category, CategoryAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id_product', 'name', 'description', 'price', 'discount', 'stock', 'image', 'pages', 'format', 'weight', 'isbn', 'category')

admin.site.register(Product, ProductAdmin)




#ORDERS

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id_order', 'id_user', 'state', 'order_date', 'payment_method', 'shipping_method', 'payment_status', 'total_amount')
    list_filter = ('state', 'order_date', 'payment_method', 'shipping_method', 'payment_status')
    search_fields = ('id_order', 'id_user__email')
    inlines = [OrderItemInline]

   
    def order_items(self, obj):
        return ", ".join([str(item) for item in obj.order_items.all()])
    order_items.short_description = 'Order Items'

    
    def has_view_permission(self, request, obj=None):
     
        if request.user.groups.filter(name='Vendedor').exists():
            return True

        return super().has_view_permission(request, obj)


admin.site.register(Order, OrderAdmin)

