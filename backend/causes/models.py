from django.db import models
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.utils import timezone 
CustomUser = get_user_model()

def get_cause_end_date():
    date = timezone.now()
    return (date.replace(day=1) + timezone.timedelta(days=32)).replace(day=1)  # return start of the next month 


class ActiveCausesManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(approved=True, end_date__gt=timezone.now() )


class Cause(models.Model):
    title = models.CharField(max_length=50)
    owner_email = models.EmailField(null=True, blank=True)
    owner_description = models.TextField()
    cause_description = models.TextField()
    image = models.ImageField(default="cause_pics/hands-love.png", upload_to="cause_pics")
    start_date = models.DateTimeField(auto_now_add=True) # TODO: User can put their start date in, or it defaults to current -> should be updated when project is approved?
    end_date = models.DateTimeField(default=get_cause_end_date)
    approved = models.BooleanField(default=False)
    objects = models.Manager()
    active_objects = ActiveCausesManager()
    
    class Meta:
        ordering = ('title', )

    def get_vote_count(self):
        return self.votes.count()

    def __str__(self):
        return self.title


class Vote(models.Model):
    user = models.ForeignKey(CustomUser, related_name="votes", on_delete=models.CASCADE)
    cause = models.ForeignKey(Cause, related_name="votes", on_delete=models.CASCADE)
    creation_date = models.DateTimeField(default = timezone.now) #auto_now_add=True
    
    def validate_unique(self,**kwargs):
        current_month = timezone.now().month
        user_votes = Vote.objects.filter(user=self.user)
        user_active_vote = user_votes.filter(creation_date__month=current_month)
        if user_active_vote.exists():
            cause = user_active_vote[0].cause
            raise ValidationError(f'You already have an active vote on {cause}!')

    def save(self, *args, **kwargs):
        self.validate_unique()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user} - {self.cause}"
