from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.utils import translation
from django.utils.translation import gettext as _

FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSezQjY9meuwRPPm7k6kDFcP5cWN3WsPls2eanwo2CfXRr2R-A/viewform"
DEFAULT_ANALYTICS_KEY = "UA-162835547-1"
DEFAULT_MAP_KEY = "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0"

LANGUAGE_CONFIG = {
    'en': {
        'form_url': FORM_URL,
        'analytics_key': DEFAULT_ANALYTICS_KEY,
        'maps_key': DEFAULT_MAP_KEY
    },
    'fr': {
        'form_url': FORM_URL,
        'analytics_key': DEFAULT_ANALYTICS_KEY,
        'maps_key': DEFAULT_MAP_KEY
    }
}


def contact(request):
    lang = request.LANGUAGE_CODE
    template_name = lang+"/contact.html"
    return render(request, template_name)


def about(request):
    lang = request.LANGUAGE_CODE
    template_name = lang+"/about.html"
    return render(request, template_name)


def index(request):
    #translation.activate('en')
    context = LANGUAGE_CONFIG[request.LANGUAGE_CODE]
    return render(request, 'index.html', context)
