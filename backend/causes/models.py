from django.db import models
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from datetime import datetime, timedelta

CustomUser = get_user_model()


class Cause(models.Model):
    title = models.CharField(max_length=50)
    owner_email = models.EmailField(null=True, blank=True)
    owner_description = models.TextField()
    cause_description = models.TextField()
    image = models.ImageField(default="cause_pics/hands-love.png", upload_to="cause_pics")
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(default=datetime.today() + timedelta(30))
    approved = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Vote(models.Model):
    user = models.ForeignKey(CustomUser, related_name="votes", on_delete=models.CASCADE)
    cause = models.ForeignKey(Cause, related_name="votes", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def validate_unique(self):
        current_month = datetime.now().month
        user_votes = Vote.objects.filter(user=self.user)
        user_active_vote = user_votes.filter(created_at__month=current_month)
        if user_active_vote.exists():
            cause = user_active_vote[0].cause
            raise ValidationError(f'You already have an active vote on {cause}!')

    def save(self, *args, **kwargs):
        self.validate_unique()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user}{self.cause}"
