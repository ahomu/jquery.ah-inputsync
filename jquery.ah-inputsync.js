/*
 * jQuery ah-inputsync plugin 1.0
 *
 * https://github.com/ahomu/jquery.ah-inputsync
 *
 * Copyright (c) 2011 Ayumu Sato ( http://havelog.ayumusato.com )
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {

$.fn.ahInputSync = function (options)
{
    // property
    var defaults = {
            groupPrefix : 'js-input_group-'
        },
        settings = $.extend({}, defaults, options);

    // method
    var onChange = function()
    {
        var regex = new RegExp('(' + settings.groupPrefix + '\\\S*)');
        if ( this.className.match(regex) ) {
            var needle  = RegExp.$1;
            $('.'+needle).not(':disabled').focus().val(this.value).blur();
        }
    };

    // construct
    this.each(function()
    {
        $(this).change(onChange);
    });

    return this;
};
})(jQuery);