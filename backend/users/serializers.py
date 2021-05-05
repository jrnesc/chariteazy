from rest_framework import serializers

from .models import Favourite, CustomUser


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ["username", "first_name", "last_name", "email", "date_joined"]


class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Favourite
        fields = ["user", "cause", "date"]