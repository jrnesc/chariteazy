from rest_framework_nested import routers
from .views import CauseViewSet, VoteViewSet


router = routers.SimpleRouter()
router.register('', CauseViewSet, basename="causes")

votes_router = routers.NestedSimpleRouter(router, '', lookup='cause')
votes_router.register('votes', VoteViewSet, basename="votes")

urlpatterns = router.urls + votes_router.urls
