from rest_framework import serializers
from .models import Cause, Vote
from users.serializers import CustomUserSerializer


class VoteSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Vote
        fields = ("id", "user", "cause","creation_date")


class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cause
        fields = (
            "id",
            "title",
            "owner_email",
            "owner_description",
            "cause_description",
            "image",
            "start_date",
            "end_date",
            "approved",
            "get_vote_count",
        )
