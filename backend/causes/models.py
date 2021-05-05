from django.db import models

class Cause(models.Model):
    title = models.CharField(max_length=50)
    organisation_info= models.TextField()
    cause_description = models.TextField()
    image = models.ImageField(default="cause_pics/hands-love.png", upload_to="cause_pics")
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title
