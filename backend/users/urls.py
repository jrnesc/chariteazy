from rest_framework_nested import routers

# import views
from .views import FavouriteViewSet, CustomUserViewSet, UserVoteViewSet


router = routers.SimpleRouter()
router.register('', CustomUserViewSet)
favourites_router = routers.NestedSimpleRouter(router,'',lookup='user')
favourites_router.register(
    "favourites", FavouriteViewSet, basename="user-favourites"
)
votes_router = routers.NestedSimpleRouter(router, '', lookup='user')
votes_router.register('votes', UserVoteViewSet, basename="user-votes")

urlpatterns = router.urls + favourites_router.urls + votes_router.urls
