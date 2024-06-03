
from django.apps import AppConfig

class MyComicAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'MyComicApp'



    def ready(self):
<<<<<<< HEAD
        import MyComicApp.load_initial_data
=======
        import MyComicApp.load_initial_data
        
        import MyComicApp.signals
>>>>>>> d64e4c1350f3a2d173661f3ab185a374f9c451fd
