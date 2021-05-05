from rest_framework import serializers
from .models import Cause


class CauseSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'title', 'organisation_info', 'cause_description','image',
                  'start_date', 'end_date')
        model = Cause
