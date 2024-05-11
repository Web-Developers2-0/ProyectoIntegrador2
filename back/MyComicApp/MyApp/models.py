from django.db import models

# Create your models here.
class Categoria(models.Model):
    
    id_Categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)
    descripcion = models.TextField(max_length=1000,blank=False)
    class Meta:
        db_table = 'categoria'
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
        
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    


class Producto(models.Model):
    
    
    id_Producto = models.AutoField(primary_key=True)
    
    nombre = models.CharField(max_length=100,blank=False)
    descripcion =models.TextField(max_length=1000,blank=False) 
    peso = models.DecimalField(max_length=100, blank=False, decimal_places = 2, max_digits=10)
    precio = models.DecimalField(blank=False, default=2000, decimal_places = 2,max_digits=10)
    cantidad = models.IntegerField(blank=False, default=2000)
    id_Categoria = models.ForeignKey(Categoria, to_field='id_Categoria', on_delete=models.CASCADE)
    class Meta: 
        db_table= 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        
        
        def __unicode__(self):
            return self.nombre
        def __str__(self):
            return self.nombre
        
<<<<<<< HEAD




=======
>>>>>>> 559d04fb5bfce847840ff3936f3a2f4d6cf188d6
        