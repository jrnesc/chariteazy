from rest_framework import serializers

from .models import Favourite, CustomUser
#from causes.serializers import CauseSerializer


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ["id","username", "first_name", "last_name", "email", "date_joined"]


class FavouriteSerializer(serializers.ModelSerializer):  
    user = CustomUserSerializer(read_only=True)
    
    class Meta:
        model= Favourite
        fields = ["user", "cause", "date"]