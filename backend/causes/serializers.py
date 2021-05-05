from rest_framework import serializers
from .models import Cause


class CauseSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'title', 'about', 'what_we_do',
                  'vote_count', 'created_at')
        model = Cause
