from django.contrib import admin
from .models import Cause, Vote


admin.site.register(Cause)
admin.site.register(Vote)