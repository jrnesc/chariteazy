from django.db import models
from django.contrib.auth import get_user_model
import datetime

CustomUser = get_user_model()


class Cause(models.Model):
    title = models.CharField(max_length=50)
    organisation_info = models.TextField()
    cause_description = models.TextField()
    image = models.ImageField(default="cause_pics/hands-love.png", upload_to="cause_pics")
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(default=datetime.datetime.today() + datetime.timedelta(30))

    def __str__(self):
        return self.title


class Vote(models.Model):
    user = models.ForeignKey(CustomUser, related_name="votes", on_delete=models.CASCADE)
    cause = models.ForeignKey(Cause, related_name="votes", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "cause")

    def __str__(self):
        return f"{self.user}{self.cause}"


# def validate_unique(self, exclude=None):
#         cause = Cause.objects.filter(pk=self.cause.pk)
#         if cause.filter(user=self.user).exists():
#             raise ValidationError('Vote already cast')


#     def save(self, *args, **kwargs):

#         self.validate_unique()

#         super(Cause, self).save(*args, **kwargs)
