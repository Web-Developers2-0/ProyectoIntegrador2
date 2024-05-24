from django.urls import path, include
from rest_framework import routers
from MyComicApp import views

router = routers.DefaultRouter()

urlpatterns = [
    
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('', include(router.urls)),
]
