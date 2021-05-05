from django.db import models

class Cause(models.Model):
    title = models.CharField(max_length=50)
    about = models.TextField()
    description = models.TextField()
    image = models.ImageField(
        default="cause_pics/hands-love.png", upload_to="cause_pics")
    vote_count = models.PositiveIntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title
