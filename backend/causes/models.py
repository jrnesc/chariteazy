from django.db import models
from django.contrib.auth.models import User


class Cause(models.Model):

    founder = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title
