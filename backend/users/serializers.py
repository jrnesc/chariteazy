from rest_framework import serializers

from .models import Favourite, CustomUser
from causes.serializers import CauseSerializer

class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ["username", "first_name", "last_name", "email", "date_joined"]


class FavouriteSerializer(serializers.ModelSerializer):
    
    user = CustomUserSerializer(readonly=True)
    cause = CauseSerializer()
    
    class Meta:
        model= Favourite
        fields = ["user", "cause", "date"]