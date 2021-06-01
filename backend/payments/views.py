import stripe

from rest_framework import views
from rest_framework import status
from rest_framework.response import Response
from djstripe import settings as djstripe_settings
from djstripe import models as djstripe_models


# Create your views here.
stripe.api_key = djstripe_settings.STRIPE_SECRET_KEY


class TestPaymentView(views.APIView):
    def post(self, request):
        test_payment_intent = stripe.PaymentIntent.create(
            amount=10,
            currency="gbp",
            payment_method_types=["card"],
            receipt_email="test@example.com",
        )
        return Response(test_payment_intent, status=status.HTTP_200_OK)


class CreateSubscriptionView(views.APIView):
    def post(self, request):
        # attach the payment method to the customer
        payment_method = stripe.PaymentMethod.attach(
            request.data["paymentMethodId"],
            customer=request.user.customer,
        )
        djstripe_models.PaymentMethod.sync_from_stripe_data(payment_method)
        # set the default payment method on the customer
        customer = stripe.Customer.modify(
            request.user.customer,
            invoice_settings={
                "default_payment_method": request.data["paymentMethodId"],
            },
        )
        djstripe_models.Customer.sync_from_stripe_data(customer)
        # create the subscription
        subscription = stripe.Subscription.create(
            customer=request.user.customer,
            items=[{"price": request.data["priceId"]}],
            expand=["latest_invoice.payment_intent"],
        )
        djstripe_subscription = djstripe_models.Subscription.sync_from_stripe_data(subscription)
        # associate subscription with the request user
        request.user.subscription = djstripe_subscription
        request.user.save()
        data = {"customer": customer, "subscription": subscription}
        return Response(data, status=status.HTTP_201_CREATED)
