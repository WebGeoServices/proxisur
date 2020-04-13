from django.urls import path, re_path
from django.views.i18n import JavaScriptCatalog

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path('^about/$', views.about, name='about'),
    re_path('^contact/$', views.contact, name='contact'),
    path('jsi18n/', JavaScriptCatalog.as_view(), name='javascript-catalog'),
]
