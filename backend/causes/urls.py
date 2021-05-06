from rest_framework_nested import routers
from .views import CauseViewSet, VoteViewSet


router = routers.SimpleRouter()
router.register('', CauseViewSet, basename="cause")

votes_router = routers.NestedSimpleRouter(router, '', lookup='cause')
votes_router.register('votes', VoteViewSet, basename="cause-votes")

urlpatterns = router.urls + votes_router.urls
