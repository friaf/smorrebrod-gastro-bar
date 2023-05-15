from django.urls import path
from booking.views import BookingPage

urlpatterns = [
    path('', BookingPage.as_view(), name='booking')
]