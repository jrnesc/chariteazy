from django.conf.urls import url

from .views import TestPaymentView, CreateSubscriptionView

urlpatterns = [
    url("create-subscription/", CreateSubscriptionView.as_view(), name="create-subscription"),
    url("test-payment/", TestPaymentView.as_view(), name="test-payment"),
]
