from django import template
from django.utils.safestring import mark_safe
from django.template import Library
import json


register = template.Library()

@register.filter
def get_at_index(list, index):
    return list[index]

@register.filter(is_safe=True)
def js(obj):
    return mark_safe(json.dumps(obj))