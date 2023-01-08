Due to the minimal interactivity with the user interface and the fact this app functioned on a singular page, I decided to utilize vanilla Javascript to creat this app. First, I drafted all the necessary logic to find the dimensions of the triangle I wanted to display, including equations like Heron's formula to find Area and Height. 

Then I began all of the JS logic for dom manipulation. There were a few fetures that I only wanted visible under certain circumstances so I utilied the hide class to achieve this, and used ().innerText in conjunction with my equations to display the triangle's dimensions upon a valid input.

I really wanted to display an actual triangle. I have never tried to specifically render a triangle before and for some reason I thought this would be really easy. But upon searching for html/css hacks to create a triangle, I realized it was a little more complicated than I thought and really required playing with border-bottom, border-left, etc in order to figure out what the math would be to create a correctly proportionate triangle. Upon completing most of the logic in my app, I realized that a triangle would only correctly for an obtuse triangle if angle A was the obtuse angle because that vertice needed to be within the length of side A. 

When there was not a valid input for sides of a triangle, the app looked a little boring. So I decided to replace the area that the triangle would render with a few fun facts about triangles to fill the space a little bit more. 

This was an app that was really fun for me to make. Recently I have been doing more work on web apps with an e-commerce feel so it was enjoyable to get my geometry on instead. 
