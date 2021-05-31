import stripe

from rest_framework import views
from rest_framework import status
from rest_framework.response import Response
from environs import Env

env = Env()
env.read_env()

# Create your views here.
stripe.api_key = env("STRIPE_SECRET_KEY")


class TestPaymentView(views.APIView):
    def post(self, request):
        test_payment_intent = stripe.PaymentIntent.create(
            amount=10,
            currency="gbp",
            payment_method_types=["card"],
            receipt_email="test@example.com",
        )
        return Response(test_payment_intent, status=status.HTTP_200_OK)
