import stripe

from rest_framework import viewsets
from dj_rest_auth.registration.views import RegisterView
from djstripe import settings as djstripe_settings
from djstripe import models as djstripe_models


# import models
from .models import CustomUser, Favourite
from causes.models import Cause, Vote

# import serializers
from .serializers import CustomUserSerializer, FavouriteSerializer
from causes.serializers import VoteSerializer


# Create your views here.
stripe.api_key = djstripe_settings.STRIPE_SECRET_KEY


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


class UserVoteViewSet(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()

    def get_queryset(self):
        votes = Vote.objects.filter(user=self.request.user)
        return votes


class CustomRegisterView(RegisterView):
    def perform_create(self, serializer):
        user = super().perform_create(serializer)
        customer = stripe.Customer.create(email=user.email)
        djstripe_customer = djstripe_models.Customer.sync_from_stripe_data(customer)
        user.customer = djstripe_customer
        user.save()
        return user
