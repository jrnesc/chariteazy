from django.db import models
from django.contrib.auth.models import AbstractUser
from causes.models import Cause



class CustomUser(AbstractUser):
    # donationAmount = models.OneToOneField()
    # paymentMethod = models.OneToOneField()
    def __str__(self):
        return self.username


class Favourite(models.Model):
    user = models.ForeignKey(CustomUser, related_name="favourites", on_delete=models.CASCADE)
    cause = models.ForeignKey(Cause, related_name="favourites", on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.user} - {self.cause}'
