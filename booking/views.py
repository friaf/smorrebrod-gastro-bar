from django.shortcuts import render
from django.urls import path
from django.views.generic import TemplateView


class BookingPage(TemplateView):
    """
    View to render homepage
    """
    template_name = 'booking.html'