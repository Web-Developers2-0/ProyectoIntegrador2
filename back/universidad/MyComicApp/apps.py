
from django.apps import AppConfig
import os

class MyComicAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'MyComicApp'

    def ready(self):
        from .load_initial_data import load_data_script
        load_data_script()
