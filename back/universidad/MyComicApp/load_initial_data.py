import os
from django.db import connection
from django.conf import settings

def load_data_script(sender, **kwargs):
    sql_file_path = os.path.join(settings.BASE_DIR, 'MyComicApp', 'initial_data.sql')

    if not os.path.exists(sql_file_path):
        print(f'SQL file not found: {sql_file_path}')
        return

    # Lista de tablas afectadas por el script
    affected_tables = ['categories', 'products', 'roles', 'mycomicapp_user', 'orders', 'order_items']

    # Verificar si ya existen datos en alguna de las tablas
    with connection.cursor() as cursor:
        for table in affected_tables:
            try:
                cursor.execute(f"SELECT COUNT(*) FROM {table}")
                count = cursor.fetchone()[0]
                if count > 0:
                    print(f'Data already exists in table {table}. Skipping data loading.')
                    return
            except Exception as e:
                print(f"Skipping table {table} because it does not exist yet: {e}")
                continue

    # Si no se encontraron datos en ninguna de las tablas, cargar los datos desde el archivo SQL
    with open(sql_file_path, 'r') as file:
        sql = file.read()

    with connection.cursor() as cursor:
        cursor.execute(sql)

    print('Successfully loaded initial data')
