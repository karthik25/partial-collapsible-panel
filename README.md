<h2>jQuery collapsible panel v2.0</h2>

Copyright (c) 2013 Karthik Ananthapadmanaban
Dual licensed under the MIT and GPL licenses.
http://docs.jquery.com/License

<b>Date:</b> 02-27-2013<br/>
<b>Project Page:</b> http://thekfactor.info/projects/partial-collapsible-panel<br/>
<br/><br/>

<b>Intro:</b>

Partial collapsible panel is a jquery plugin that is similar to ajax control toolkit's CollapsiblePanelExtender. There are few plugins that does something similar to that, but they do not deal with partially collapsed panels.

[update] An update as of 3/18/2012. I have released v2 of this plugin. in case you intend to have an image in the header, you no longer have to have an <img /> tag anymore. You just have to set the enableHeaderImage property and specify the expandedImageUrl and collapsedImageUrl urls.

[update] As of 2/27/2013, Checking this in to github.

<b>How to use it?</b>

Okay, how do you use it in your projects? Here you go, it's just a few steps.
<br/><br/>

<b><i>Include the css required</i></b><br/>

<code>
&lt;style type="text/css"&gt;<br/>
.cpHeader<br/>
{<br/>
    background-color: #6A6A6A;<br/>
    border: solid 1px  #6A6A6A;<br/>
    width: 450px;<br/>
    color: White;<br/>
}
 <br/>
.cpContent<br/>
{<br/>
    background-color: #dadada; <br/>
    border:1px solid #6A6A6A;<br/>
    width: 450px;<br/>
    color: Black;<br/>
}
<br/>
&lt;/style&gt;
</code>

<b><i>Include jquery and partial collapsible panel javascript files</i></b><br/>

<code>
&lt;script type="text/javascript" language="javascript" src="jquery.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" language="javascript" src="partial-collapsible-panel.minified.js"&gt;&lt;/script&gt;
</code>

<b><i>Following is an example section that you could apply this plugin</i></b><br/>

<code>
&lt;div class="cpHeader"&gt;<br/>
    Lorem Ipsum<br/>
&lt;/div&gt;<br/>
&lt;div class="cpContent"&gt;<br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis justo nec ante facilisis aliquam. Nam vitae sem est. Nam at tristique tortor. Maecenas non risus nulla. 
    <br/>Curabitur libero metus, laoreet nec ultricies id, commodo vitae felis. Curabitur interdum commodo hendrerit. Suspendisse sit amet eros nulla. Donec faucibus posuere libero. Nunc 
    <br/>laoreet leo et justo lobortis eu placerat metus bibendum. In consequat urna ut nibh dapibus a euismod erat consectetur. Aliquam in pharetra lorem. Integer ac arcu nec ante pharetra 
    <br/>dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis justo nec ante facilisis aliquam. Nam vitae sem est. Nam at tristique tortor. Maecenas non risus nulla. 
    <br/>Curabitur libero metus, laoreet nec ultricies id, commodo vitae felis. Curabitur interdum commodo hendrerit. Suspendisse sit amet eros nulla. Donec faucibus posuere libero. Nunc 
    <br/>laoreet leo et justo lobortis eu placerat metus bibendum. In consequat urna ut nibh dapibus a euismod erat consectetur. Aliquam in pharetra lorem. Integer ac arcu nec ante pharetra 
    <br/>dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis justo nec ante facilisis aliquam. Nam vitae sem est. Nam at tristique tortor. Maecenas non risus nulla. 
&lt;/div&gt;<br/>
</code>

<b><i>Finally, apply the plugin!</i></b><br/>

<code>
$('.cpHeader').partialcollapsiblepanel();
</code>

<b>Options</b>

<table border="1" id="tblOptions">
	<tr class="alt">
	    <th><b>name</b></th>
	    <th><b>type/values</b></th>
	    <th><b>description</b></th>
	</tr>
	<tr>
	    <td>contentHeight</td>
	    <td>integer</td>
	    <td>collapsed content width. default is <b>60</b>.</td>
	</tr>
	<tr class="alt">
	    <td>animateSpeed</td>
	    <td>integer</td>
	    <td>the speed at which the content collapses/expands. default is <b>500</b>.</td>
	</tr>
	<tr>
	    <td>enableHeaderImage</td>
	    <td>boolean</td>
	    <td>if the header contains an image that has to be replaced. default is <b>false</b></td>
	</tr>
	<tr class="alt">
	    <td>headerImageClass</td>
	    <td>string</td>
	    <td>css class of the image in the header div. applicable only if header image is enabled. default is <b>&lt;blank&gt;</b></td>
	</tr>
	<tr>
	    <td>expandedImageUrl</td>
	    <td>string</td>
	    <td>image url to be used if header image is enabled and the content is expanded. applicable only if header image is enabled. default is <b>&lt;blank&gt;</b></td>
	</tr>
	<tr class="alt">
	    <td>collapsedImageUrl</td>
	    <td>string</td>
	    <td>image url to be used if header image is enabled and the content is collapsed. applicable only if header image is enabled. default is <b>&lt;blank&gt;</b></td>
	</tr>
	<tr>
	    <td>contentClass</td>
	    <td>string</td>
	    <td>css class of the content for the associated header. default is <b>cpContent</b>.</td>
	</tr>
	<tr class="alt">
	    <td>padHeader</td>
	    <td>boolean</td>
	    <td>specify if content inside the header has to be padded. the padding width is <b>2px</b></td>
	</tr>
	<tr>
	    <td>padContent</td>
	    <td>boolean</td>
	    <td>specify if content inside the content has to be padded. the padding width is <b>2px</b></td>
	</tr>
</table> 
