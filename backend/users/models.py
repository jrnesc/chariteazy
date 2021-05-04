from django.db import models
from django.contrib.auth.models import AbstractUser

# from causes.models import Cause


class CustomUser(AbstractUser):
    # donationAmount = models.OneToOneField()
    # paymentMethod = models.OneToOneField()
    # favourites = models.ForeignKey(
    #     Cause, related_name="favourite", default=None, blank=True
    # )

    def __str__(self):
        return f"{self.username}"
