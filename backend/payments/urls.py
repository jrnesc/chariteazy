from django.conf.urls import url

from .views import TestPaymentView

urlpatterns = [
    url("test-payment/", TestPaymentView.as_view(), name="test-payment"),
]
