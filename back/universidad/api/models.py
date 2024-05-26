from django.db import models
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=45)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.IntegerField(null=True)
    stock = models.IntegerField()
    image = models.CharField(max_length=255, null=True)
    pages = models.IntegerField(null=True)
    formato = models.CharField(max_length=45, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    isbn = models.CharField(max_length=45, null=True)
    calification = models.IntegerField(null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

