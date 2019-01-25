---
layout: "fluid/docs_base"
version: "3.9.2"
versionHref: "/docs"
path: ""
category: api
id: "viewcontroller"
title: "ViewController"
header_sub_title: "Ionic API Documentation"
doc: "ViewController"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="view-controller" href="#view-controller"></a>

ViewController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/navigation/view-controller.ts#L6">
Improve this doc
</a>






<p>Access various features and information about the current view.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { ViewController } from &#39;ionic-angular&#39;;

@Component({...})
export class MyPage{

  constructor(public viewCtrl: ViewController) {}

}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="component"></div>

<h3>
<a class="anchor" name="component" href="#component">
<code>component</code>
  

</a>
</h3>











<div id="contentRef"></div>

<h3>
<a class="anchor" name="contentRef" href="#contentRef">
<code>contentRef()</code>
  

</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ElementRef</code> <p>Returns the Content&#39;s ElementRef.</p>


</div>




<div id="didEnter"></div>

<h3>
<a class="anchor" name="didEnter" href="#didEnter">
<code>didEnter</code>
  

</a>
</h3>

Observable to be subscribed to when the current component has become active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="didLeave"></div>

<h3>
<a class="anchor" name="didLeave" href="#didLeave">
<code>didLeave</code>
  

</a>
</h3>

Observable to be subscribed to when the current component is no long active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="dismiss"></div>

<h3>
<a class="anchor" name="dismiss" href="#dismiss">
<code>dismiss(data,&nbsp;role ,&nbsp;navOptions)</code>
  

</a>
</h3>

Dismiss the current viewController


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        data
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>Data that you want to return when the viewController is dismissed.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        role 
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p><strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        navOptions
        
        
      </td>
      <td>
        
  <code>NavOptions</code>
      </td>
      <td>
        <p>Options for the dismiss navigation.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>any</code> <p>data Returns the data passed in, if any.</p>


</div>




<div id="enableBack"></div>

<h3>
<a class="anchor" name="enableBack" href="#enableBack">
<code>enableBack()</code>
  

</a>
</h3>

Check to see if you can go back in the navigation stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns if it&#39;s possible to go back from this Page.</p>


</div>




<div id="getContent"></div>

<h3>
<a class="anchor" name="getContent" href="#getContent">
<code>getContent()</code>
  

</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>component</code> <p>Returns the Page&#39;s Content component reference.</p>


</div>




<div id="hasNavbar"></div>

<h3>
<a class="anchor" name="hasNavbar" href="#hasNavbar">
<code>hasNavbar()</code>
  

</a>
</h3>

Find out if the current component has a NavBar or not. Be sure
to wrap this in an `ionViewWillEnter` method in order to make sure
the view has rendered fully.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns a boolean if this Page has a navbar or not.</p>


</div>




<div id="index"></div>

<h3>
<a class="anchor" name="index" href="#index">
<code>index</code>
  

</a>
</h3>

Get the index of the current component in the current navigation stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>Returns the index of this page within its <code>NavController</code>.</p>


</div>




<div id="isFirst"></div>

<h3>
<a class="anchor" name="isFirst" href="#isFirst">
<code>isFirst()</code>
  

</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns if this Page is the first in the stack of pages within its NavController.</p>


</div>




<div id="isLast"></div>

<h3>
<a class="anchor" name="isLast" href="#isLast">
<code>isLast()</code>
  

</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns if this Page is the last in the stack of pages within its NavController.</p>


</div>




<div id="onDidDismiss"></div>

<h3>
<a class="anchor" name="onDidDismiss" href="#onDidDismiss">
<code>onDidDismiss()</code>
  

</a>
</h3>

Called when the current viewController has be successfully dismissed










<div id="onWillDismiss"></div>

<h3>
<a class="anchor" name="onWillDismiss" href="#onWillDismiss">
<code>onWillDismiss()</code>
  

</a>
</h3>

Called when the current viewController will be dismissed










<div id="pageRef"></div>

<h3>
<a class="anchor" name="pageRef" href="#pageRef">
<code>pageRef()</code>
  

</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ElementRef</code> <p>Returns the Page&#39;s ElementRef.</p>


</div>




<div id="setBackButtonText"></div>

<h3>
<a class="anchor" name="setBackButtonText" href="#setBackButtonText">
<code>setBackButtonText(val)</code>
  

</a>
</h3>

Change the title of the back-button. Be sure to call this
after `ionViewWillEnter` to make sure the  DOM has been rendered.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        val
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Set the back button text.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="showBackButton"></div>

<h3>
<a class="anchor" name="showBackButton" href="#showBackButton">
<code>showBackButton(Set)</code>
  

</a>
</h3>

Set if the back button for the current view is visible or not. Be sure to call this
after `ionViewWillEnter` to make sure the  DOM has been rendered.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        Set
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>if this Page&#39;s back button should show or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="willEnter"></div>

<h3>
<a class="anchor" name="willEnter" href="#willEnter">
<code>willEnter</code>
  

</a>
</h3>

Observable to be subscribed to when the current component will become active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="willLeave"></div>

<h3>
<a class="anchor" name="willLeave" href="#willLeave">
<code>willLeave</code>
  

</a>
</h3>

Observable to be subscribed to when the current component will no longer be active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="willUnload"></div>

<h3>
<a class="anchor" name="willUnload" href="#willUnload">
<code>willUnload</code>
  

</a>
</h3>

Observable to be subscribed to when the current component has been destroyed






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>







<!-- related link --><!-- end content block -->


<!-- end body block -->

