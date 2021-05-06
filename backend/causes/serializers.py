from rest_framework import serializers
from .models import Cause, Vote
from users.serializers import CustomUserSerializer


class VoteSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    class Meta:
        model = Vote
        fields = ('id','user','created_at',)

class CauseSerializer(serializers.ModelSerializer):
    votes = VoteSerializer(many=True)
    class Meta:
        model = Cause
        fields = ('id', 'title', 'organisation_info', 'cause_description','image',
                  'start_date', 'end_date','votes')
