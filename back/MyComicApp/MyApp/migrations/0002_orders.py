# Generated by Django 5.0.6 on 2024-05-09 19:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id_order', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField(max_length=1000)),
                ('peso', models.DecimalField(decimal_places=2, max_digits=10, max_length=100)),
                ('precio', models.DecimalField(decimal_places=2, default=2000, max_digits=10)),
                ('cantidad', models.IntegerField(default=2000)),
                ('id_Categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MyApp.categoria')),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
                'db_table': 'orders',
            },
        ),
    ]