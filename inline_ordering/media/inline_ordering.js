// http://forum.jquery.com/topic/jquery-reverse-a-collection-of-jquery-elements
jQuery.fn.reverse = [].reverse;

var InlineOrdering = {

    /**
     * Get list of elements that can be reordered
     *
     * At this point, only already existent records can be reordered (ie. where pk != '')
     *
     * @return Array
     * @todo Check if given record changed, and if so, make it reorderable
     * @todo Primary key might not be 'id' - better selector needed
     *
     */
    getOrderables: function(){
        var
            ids,
            parents
            ;
        ids = jQuery('div.inline-group .inline-related input[name$=id]:not([value=])');
        parents = ids.parent('.inline-related');    // Works for stacked inlines
        if (parents.length === 0) {
            parents = ids.parents('.has_original').reverse();  // Works for tabular inlines
        }
        return parents;
    },

    /**
     * Inits the jQuery UI D&D
     *
     */
    init: function(){
        jQuery("div.inline-group").sortable({
            axis: 'y',
            placeholder: 'ui-state-highlight',
            forcePlaceholderSize: 'true',
            items: InlineOrdering.getOrderables(),
            update: InlineOrdering.update
        });
        jQuery("div.inline-group").disableSelection();

        jQuery(this).find('div.inline_ordering_position').hide();
        jQuery('.add-row a').click(InlineOrdering.update);
    },

    /**
     * Updates the position field
     *
     */
    update: function(){
        InlineOrdering.getOrderables().each(function(i){
            jQuery(this).find('input[id$=inline_ordering_position]').val(i + 1);
        });
    }

};

jQuery(function(){
    InlineOrdering.init();
});
