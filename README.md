jQuery collapsible panel v2.0

Copyright (c) 2013 Karthik Ananthapadmanaban
Dual licensed under the MIT and GPL licenses.
http://docs.jquery.com/License

Date: 02-27-2013
Project Page: http://thekfactor.info/projects/partial-collapsible-panel

<b>Intro:</b>

Partial collapsible panel is a jquery plugin that is similar to ajax control toolkit's CollapsiblePanelExtender. There are few plugins that does something similar to that, but they do not deal with partially collapsed panels.

[update] An update as of 3/18/2012. I have released v2 of this plugin. in case you intend to have an image in the header, you no longer have to have an <img /> tag anymore. You just have to set the enableHeaderImage property and specify the expandedImageUrl and collapsedImageUrl urls.

[update] As of 2/27/2013, Checking this in to github.

<b>How to use it?</b>

Okay, how do you use it in your projects? Here you go, it's just a few steps.

1. include the css required

<style type="text/css">
.cpHeader
{
    background-color: #6A6A6A;
    border: solid 1px  #6A6A6A;
    width: 450px;
    color: White;
}
 
.cpContent
{
    background-color: #dadada; 
    border:1px solid #6A6A6A;
    width: 450px;
    color: Black;
}
</style>

2. Include jquery and partial collapsible panel javascript files

<script type="text/javascript" language="javascript" src="jquery.min.js"></script>
<script type="text/javascript" language="javascript" src="partial-collapsible-panel.minified.js"></script>

3. Following is an example section that you could apply this plugin

<div class="cpHeader">
    Lorem Ipsum
</div>
<div class="cpContent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis justo nec ante facilisis aliquam. Nam vitae sem est. Nam at tristique tortor. Maecenas non risus nulla. 
    Curabitur libero metus, laoreet nec ultricies id, commodo vitae felis. Curabitur interdum commodo hendrerit. Suspendisse sit amet eros nulla. Donec faucibus posuere libero. Nunc 
    laoreet leo et justo lobortis eu placerat metus bibendum. In consequat urna ut nibh dapibus a euismod erat consectetur. Aliquam in pharetra lorem. Integer ac arcu nec ante pharetra 
    dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis justo nec ante facilisis aliquam. Nam vitae sem est. Nam at tristique tortor. Maecenas non risus nulla. 
    Curabitur libero metus, laoreet nec ultricies id, commodo vitae felis. Curabitur interdum commodo hendrerit. Suspendisse sit amet eros nulla. Donec faucibus posuere libero. Nunc 
    laoreet leo et justo lobortis eu placerat metus bibendum. In consequat urna ut nibh dapibus a euismod erat consectetur. Aliquam in pharetra lorem. Integer ac arcu nec ante pharetra 
    dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis justo nec ante facilisis aliquam. Nam vitae sem est. Nam at tristique tortor. Maecenas non risus nulla. 
</div>       

4. Finally, apply the plugin!

$('.cpHeader').partialcollapsiblepanel();

<b>Options</b>

name			type/values	description
--------------------------------------------------------
contentHeight		integer		Collapsed content width. default is 60.
animateSpeed		integer		The speed at which the content collapses/expands. default is 500.
enableHeaderImage	boolean		If the header contains an image that has to be replaced. default is false
headerImageClass	string		Css class of the image in the header div. applicable only if header image is enabled. default is <blank>
expandedImageUrl	string		Image url to be used if header image is enabled and the content is expanded. applicable only if header image is enabled.                                         	default is <blank>
collapsedImageUrl	string		Image url to be used if header image is enabled and the content is collapsed. applicable only if header image is enabled.                                         	default is <blank>
contentClass		string		Css class of the content for the associated header. default is cpContent.
padHeader		boolean		Specify if content inside the header has to be padded. the padding width is 2px
padContent		boolean		Specify if content inside the content has to be padded. the padding width is 2px
