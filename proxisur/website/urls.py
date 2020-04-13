from django.urls import path
from django.views.i18n import JavaScriptCatalog

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('static/js/scripts_v20.js', JavaScriptCatalog.as_view(), name='javascript-catalog'),
]
