from django.contrib import admin

# Register your models here.
from .models import CustomUser, Favourite
admin.site.register(CustomUser)
admin.site.register(Favourite)