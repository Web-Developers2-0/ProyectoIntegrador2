
from django.apps import AppConfig
from django.db.models.signals import post_migrate

class MyComicAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'MyComicApp'

    def ready(self):
        from .load_initial_data import load_data_script
        post_migrate.connect(load_data_script, sender=self)
