from django.urls import path, include
from rest_framework import routers
from MyComicApp import views
from rest_framework_simplejwt.views import TokenVerifyView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

router = routers.DefaultRouter()

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.Login.as_view(), name='login'), 
    path('logout/', views.Logout.as_view(), name='logout'),
    path('', include(router.urls)),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('user/', views.UserView.as_view(), name='user'),
    path('user/update/', views.UpdateUserView.as_view(), name='user_update'),
]
