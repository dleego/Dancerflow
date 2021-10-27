"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from play.views import PlayView
from django.contrib import admin
from django.urls import path
# views import ProductListAPI
from django.urls import include, path
from rest_framework import routers
# from product import views
from django.conf.urls.static import static
from django.conf import settings

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('main/', include('main.urls')),
    path('play/', include('play.urls')),
    path('user/', include('user.urls')),
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    # path('product', include('product.urls')),
    # path('api/product/', ProductListAPI.as_view()),
    # path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
