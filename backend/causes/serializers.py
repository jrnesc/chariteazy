from rest_framework import serializers
from .models import Cause


class CauseSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'founder', 'title', 'about', 'description', 'image',
                  'vote_count', 'created', 'end_date')
        model = Cause
