BootInspect
===========

A simple tool for visually displaying columns in a Bootstrap 3 based page. The objective was to give a visual outline and labeling of what column sizes are happening at different screen sizes. This helps debug and sort out building layouts with Bootstrap. In particular it proves its worth when mixing in push, pull and offset.

In a future update I want to add labels for push, pull and offset as well. I also plan to build a bookmarklet that will allow you to instantly run it on any page via a favorite link.

Origin
==============
[I](http://pmcneil.com) teach basic web coding courses at the University level and I found it was really helpful to provide a visualization for students when learning Bootstrap. While it started as a teaching aid, I quickly found that I wanted to use it in every project I work on. As a part of a workshop for FOWD I decided to formalize the tool and see if anyone else wanted to use it. 

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

![Basic Columns](https://cloud.githubusercontent.com/assets/2159602/4690006/c47e89b6-56d6-11e4-8d46-836c49559afc.jpg)
Here you can see that BootInspect has outlined containers in blue, rows in red and columns in green. It uses CSS outlines so as to not mess up the spacing of things. Also you will notice it has labeled the columns to indicate which size column it is!

![Basic Columns](https://cloud.githubusercontent.com/assets/2159602/4690006/c47e89b6-56d6-11e4-8d46-836c49559afc.jpg)
Note that the XS column is rendered in white while the medium ones are orange. This is because the current display size is medium. So all inherited col sizes are white, while the ones targeting the current size are yellow. If this browser were sized up to be large, the medium ones would turn white. Note, the orange tags are covering up any sm or xs col sizes they override.

![Smaller screen](https://cloud.githubusercontent.com/assets/2159602/4690009/c4824f60-56d6-11e4-90cb-5dbe8034d188.jpg)
Here the same design is shown with a smaller screen size in the small range. Note the purple color used to indicate sm columns.

![Helpful for debugging](https://cloud.githubusercontent.com/assets/2159602/4690007/c47fbec6-56d6-11e4-9390-b822b1941c76.jpg)
In this screenshot you can see how it was helpful to debug. In the white row I was using push/pull to swap the two columns of content on larger screens. It was confusing where the columns start and end. With BootInspect on it was obvious that the first column was being pulled over one column too far. 

BootLint
===================
This tool is not meant to replace [BootLint](https://github.com/twbs/bootlint). I find that the two work really well together.

Release History
==============
* 2014/10/18 - First formal release in preperation for use at Future of Web Deisgn NYC

License
==============
Copyright (c) 2014 Patrick McNeil. Licensed under the MIT license.
