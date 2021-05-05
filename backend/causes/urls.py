from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CauseViewSet


router = SimpleRouter()
router.register(r'causes', CauseViewSet)

urlpatterns = router.urls
