from rest_framework_nested import routers

# import views
from .views import FavouriteViewSet, CustomUserViewSet


router = routers.SimpleRouter()
router.register('', CustomUserViewSet)
favourites_router = routers.NestedSimpleRouter(router,'',lookup='user')
favourites_router.register(
    "favourites", FavouriteViewSet, basename="user-favourites"
)

urlpatterns = router.urls + favourites_router.urls
