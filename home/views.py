from django.urls import path
from django.views.generic import TemplateView


class HomePage(TemplateView):
    """
    View to render homepage
    """
    template_name = 'index.html'