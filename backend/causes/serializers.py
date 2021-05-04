from rest_framework import serializers
from .models import Cause


class CauseSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'founder', 'title', 'description',
                  'vote_count', 'created_at')
        model = Cause
