from rest_framework import viewsets

# import models
from .models import CustomUser, Favourite
from causes.models import Cause

# import serializers
from .serializers import CustomUserSerializer, FavouriteSerializer


class FavouriteViewSet(viewsets.ModelViewSet):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

    def get_queryset(self):
        favourites = Favourite.objects.filter(user=self.kwargs["user_pk"])
        return favourites

    def perform_create(self, serializer):
        cause = serializer.validated_data["cause"]
        print(serializer.validated_data["cause"])
        serializer.save(user=self.request.user, cause=cause)


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
