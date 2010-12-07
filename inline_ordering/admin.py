from django.contrib.admin import StackedInline, TabularInline

class OrderableStackedInline(StackedInline):
    """Adds necessary media files to regular Django StackedInline"""

    class Media:
        js = (
            'inline_ordering_preamble.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js',
            'inline_ordering.js',
        )


class OrderableTabularInline(TabularInline):
    """Adds necessary media files to regular Django TabularInline"""

    class Media:
        js = (
            'inline_ordering_preamble.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js',
            'inline_ordering.js',
        )
