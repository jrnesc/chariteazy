from rest_framework import viewsets

# import models
from.models import CustomUser, Favourite

# import serializers
from .serializers import CustomUserSerializer,FavouriteSerializer

class FavouriteViewSet(viewsets.ModelViewSet):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    
    
    
