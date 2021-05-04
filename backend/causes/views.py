from rest_framework import viewsets
from .models import Cause
from .permissions import IsFounderOrReadOnly
from .serializers import CauseSerializer


class CauseViewSet(viewsets.ModelViewSet):

    permission_classes = (IsFounderOrReadOnly,)
    queryset = Cause.objects.all()
    serializer_class = CauseSerializer
