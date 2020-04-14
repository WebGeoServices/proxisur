from django import template

register = template.Library()


@register.filter
def html_link(link, text):
    return "<a href=\""+str(link)+"\" target=\"_blank\">"+str(text)+"</a>"
