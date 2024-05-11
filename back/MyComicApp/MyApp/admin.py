from django.contrib import admin

from .models import Categoria
from .models import Producto

# Register your models here.
class CategoriaAdmin(admin.ModelAdmin):
    list_display=('nombre','descripcion')
    
class ProductoAdmin (admin.ModelAdmin):
    list_display=('nombre','descripcion','peso','precio','cantidad','id_Categoria')
    
admin.site.register(Categoria,CategoriaAdmin)
<<<<<<< HEAD
admin.site.register(Producto,ProductoAdmin)
=======
admin.site.register(Producto,ProductoAdmin)
>>>>>>> 559d04fb5bfce847840ff3936f3a2f4d6cf188d6
