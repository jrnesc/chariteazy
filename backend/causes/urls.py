from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CauseViewSet


router = SimpleRouter()
router.register('', CauseViewSet, basename='causes')

urlpatterns = router.urls
