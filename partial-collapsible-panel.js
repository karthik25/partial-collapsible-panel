/*
* jquery collapsible panel v2.0
*
* Copyright (c) 2011 Karthik Ananthapadmanaban
* Dual licensed under the MIT and GPL licenses.
* http://docs.jquery.com/License
*
* Date: 03-17-2012
* Project Page: http://thekfactor.info/projects/partial-collapsible-panel
*
*/
(function ($) {
    $.fn.partialcollapsiblepanel = function (options) {

        var settings = {
            'contentHeight': 60,
            'animateSpeed': 500,
            'enableHeaderImage': false,
            'contentClass': 'cpContent',
            'headerImageClass': 'imgExpandCollapse',
            'expandedImageUrl': '',
            'collapsedImageUrl': '',
            'padHeader': false,
            'padContent': false
        };

        $.extend(settings, options);

        return this.each(function () {
            var $cpHeader = $(this);
            $cpHeader.css('cursor', 'pointer');

            if (settings.padHeader) {
                $cpHeader.css('padding', '2px 2px 2px 2px');
            }

            var $img = null;
            if (settings.enableHeaderImage) {
				var imgElem = document.createElement('img');
				$(imgElem).attr('src',settings.expandedImageUrl);
				$(imgElem).attr('border','0');
				$(imgElem).attr('alt','');
				$(imgElem).attr('style','width:15px;height:15px;vertical-align:top;');
				$(imgElem).attr('class','imgExpandCollapse');
				$cpHeader.prepend(imgElem);

                $img = $cpHeader.find('img.' + settings.headerImageClass);
            }

            var $cpContent = $cpHeader.next('.' + settings.contentClass);
            $cpContent.css('height', settings.contentHeight + 'px').css('overflow-y', 'hidden');

            if (settings.padContent) {
                $cpContent.css('padding', '2px 2px 2px 2px');
            }

            $cpHeader.click(function () {
                var element = $cpContent;
                var height = $(element).height();

                if (height <= settings.contentHeight) {
                    // using 'attr' wouldn't be fine, since it wouldn't work in chrome
                    var height2 = $(element).prop('scrollHeight');
                    $(element).animate({ height: height2 + 'px' }, settings.animateSpeed);
                    if (settings.enableHeaderImage) {
                        var imgUrl = $img.attr('src');
                        imgUrl = imgUrl.replace(settings.expandedImageUrl, settings.collapsedImageUrl);
                        $img.attr('src', imgUrl);
                    }
                }
                else {
                    $(element).animate({ height: settings.contentHeight + 'px' }, settings.animateSpeed);
                    if (settings.enableHeaderImage) {
                        var imgUrl = $img.attr('src');
                        imgUrl = imgUrl.replace(settings.collapsedImageUrl, settings.expandedImageUrl);
                        $img.attr('src', imgUrl);
                    }
                }
            });
        });
    };
})(jQuery);
