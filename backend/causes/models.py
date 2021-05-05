from django.db import models

class Cause(models.Model):
    title = models.CharField(max_length=50)
    about = models.TextField()
    what_we_do = models.TextField()
    vote_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
