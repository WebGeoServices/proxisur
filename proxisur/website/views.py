from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.utils import translation
from django.utils.translation import gettext as _


def index(request):
    print(request.LANGUAGE_CODE)
    #translation.activate('de')
    context = {"form_url":"https://docs.google.com/forms/d/e/1FAIpQLSezQjY9meuwRPPm7k6kDFcP5cWN3WsPls2eanwo2CfXRr2R-A/viewform"}
    return render(request, 'index.html', context)
