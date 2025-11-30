# TechEd_Week_2_Assignment

Building an accessible image gallery as part of the TechEducators software development bootcamp

# What requirements did you achieve?

I believe that I have achieved all of the standard requirements but I did really struggle with the reponsive layout. It's still not perfect, but I am happy enough with it as I spent a really long time on it.

# Were there any goals that you were unable to achieve?

I found it difficult to try and use the arrow keys to scroll through the images for people who use keyboards rather than a mouse. Instead, I added a tab index to make the thumbnail images scrollable using the Tab key and then selected for the main image when using the Enter or Space keys.

# If so, what was it that you found difficult about these tasks?

I couldn't get the code to work for the arrow keys because I think the arrow keys had a default setting of moving the scrollbars on the containers instead of scrolling through the images.

# Additional reflections:

I used my own images rather than downloading them from another site.

I initially found it very difficult to display the main image on click, but thankfully Bertie explained to me that it was because I was trying to access the [i] from inside a scope I couldn't access from another function.

I really struggled with trying to figure out the dimensions for the main image, and centering the main image inside of the grid (horizontally). I tried all of the "align", "justify" "place" etc on both of the image itself and the container and then tried margin:auto as a last resort, but nothing was working and I couldn't figure out why. I really would like some feedback on this for the future as I spent an hour just trying to do this.

I did try doing width: 100%; for the main image which made it stretch across the whole screen (and I think that it did look better this way), but with the viewport height also set to 100vh, it chopped off the tops and bottoms of my images. So I've left the viewport height as 100vh, and kept a max-width of 100%, but that leaves a big blank space on the right hand side. Again, I wasn't able to center the image in the parent grid container to make it look a bit better.

I also ran a lighthouse report in an incognito window and I couldn't score more than 70% for performance, even though I did compress all of my images which were very large.
