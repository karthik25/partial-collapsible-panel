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
(function(a){a.fn.partialcollapsiblepanel=function(b){var c={contentHeight:60,animateSpeed:500,enableHeaderImage:false,contentClass:"cpContent",headerImageClass:"imgExpandCollapse",expandedImageUrl:"",collapsedImageUrl:"",padHeader:false,padContent:false};a.extend(c,b);return this.each(function(){var b=a(this);b.css("cursor","pointer");if(c.padHeader){b.css("padding","2px 2px 2px 2px")}var d=null;if(c.enableHeaderImage){var e=document.createElement("img");a(e).attr("src",c.expandedImageUrl);a(e).attr("border","0");a(e).attr("alt","");a(e).attr("style","width:15px;height:15px;vertical-align:top;");a(e).attr("class","imgExpandCollapse");b.prepend(e);d=b.find("img."+c.headerImageClass)}var f=b.next("."+c.contentClass);f.css("height",c.contentHeight+"px").css("overflow-y","hidden");if(c.padContent){f.css("padding","2px 2px 2px 2px")}b.click(function(){var b=f;var e=a(b).height();if(e<=c.contentHeight){var g=a(b).prop("scrollHeight");a(b).animate({height:g+"px"},c.animateSpeed);if(c.enableHeaderImage){var h=d.attr("src");h=h.replace(c.expandedImageUrl,c.collapsedImageUrl);d.attr("src",h)}}else{a(b).animate({height:c.contentHeight+"px"},c.animateSpeed);if(c.enableHeaderImage){var h=d.attr("src");h=h.replace(c.collapsedImageUrl,c.expandedImageUrl);d.attr("src",h)}}})})}})(jQuery)