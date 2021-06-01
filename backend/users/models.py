from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    customer = models.ForeignKey('djstripe.Customer', null=True, blank=True, on_delete=models.SET_NULL)
    subscription = models.ForeignKey('djstripe.Subscription', null=True, blank=True, on_delete=models.SET_NULL)


class Favourite(models.Model):
    user = models.ForeignKey(CustomUser, related_name="favourites", on_delete=models.CASCADE)
    cause = models.ForeignKey("causes.Cause", related_name="favourites", on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.cause}"
