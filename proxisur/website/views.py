from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.utils import translation
from django.utils.translation import gettext as _

FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSezQjY9meuwRPPm7k6kDFcP5cWN3WsPls2eanwo2CfXRr2R-A/viewform"
DEFAULT_ANALYTICS_KEY = "UA-162835547-1"
DEFAULT_MAP_KEY = "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0"
DEAFULT_FB_LINK = "https://business.facebook.com/Nearbyandsafe-106249261051214/"
DEFAULT_WOOSMAP_KEY = "woos-d7e23af4-a101-38b8-bd8d-0645ed79b46b"

LANGUAGE_CONFIG = {
    'en': {
        'lang': 'en',
        'form_url': FORM_URL,
        'analytics_key': DEFAULT_ANALYTICS_KEY,
        'maps_key': DEFAULT_MAP_KEY,
        'woosmap_key': DEFAULT_WOOSMAP_KEY,
        'facebook_link': DEAFULT_FB_LINK
    },
    'de': {
        'lang': 'de',
        'form_url': FORM_URL,
        'analytics_key': DEFAULT_ANALYTICS_KEY,
        'maps_key': DEFAULT_MAP_KEY,
        'woosmap_key': DEFAULT_WOOSMAP_KEY,
        'facebook_link': DEAFULT_FB_LINK
    },
    'fr': {
        'lang': 'fr',
        'form_url': FORM_URL,
        'analytics_key': DEFAULT_ANALYTICS_KEY,
        'maps_key': DEFAULT_MAP_KEY,
        'woosmap_key': DEFAULT_WOOSMAP_KEY,
        'facebook_link': "https://business.facebook.com/Proxisur-104811107863421/"
    },
    'it': {
        'lang': 'it',
        'form_url': FORM_URL,
        'analytics_key': DEFAULT_ANALYTICS_KEY,
        'maps_key': DEFAULT_MAP_KEY,
        'woosmap_key': DEFAULT_WOOSMAP_KEY,
        'facebook_link': 'https://www.facebook.com/vicinoesicuro/'
    }
}


def contact(request):
    lang = request.LANGUAGE_CODE if request.LANGUAGE_CODE in LANGUAGE_CONFIG else 'en'
    template_name = lang+"/contact.html"
    return render(request, template_name)


def about(request):
    lang = request.LANGUAGE_CODE if request.LANGUAGE_CODE in LANGUAGE_CONFIG else 'en'
    template_name = lang+"/about.html"
    return render(request, template_name)


def index(request):
    print(request.LANGUAGE_CODE)
    language = request.LANGUAGE_CODE
    if request.LANGUAGE_CODE not in LANGUAGE_CONFIG:
        language = 'en'
        translation.activate(language)
    context = LANGUAGE_CONFIG[language]
    return render(request, 'index.html', context)
