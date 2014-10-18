BootInspect
===========

A simple tool for visually displaying columns in a Bootstrap 3 based page. The objective was to give a visual outline and labeling of what column sizes are happening at different screen sizes. This helps debug and sort out building layouts with Bootstrap. In particular it proves its worth when mixing in push, pull and offset.

In a future update I want to add labels for push, pull and offset as well. 

jQuery
===========
BootInspect requires that you have jQuery running on the page. I am sure it could easily be adapted to not need it.. However, since this isn't something you leave in a site I went for simplicity of creating it in place of creating a self sustaining utility.  Besides, jQuery and Bootstrap go hand in hand.

How to use it
===========
Using it is simple:

* Attach the CSS file to the page
* Attach the JS file to the page
* Open the page in a browser - The JS file runs the inspection tool. 

Simply remove the CSS and JS file when you are done building your page.

Demonstrations
==================
Seeing what this does is probably even more helpful:

![Basic Columns](https://www.dropbox.com/s/lp8y0qji54v1104/basic-columns.jpg?dl=0 "basic columns")
Here you can see that BootInspect has outlined containers in blue, rows in red and columns in green. It uses CSS outlines so as to not mess up the spacing of things. Also you will notice it has labeled the columns to indicate which size column it is!


License
==============
Copyright (c) 2014 Patrick McNeil. Licensed under the MIT license.
