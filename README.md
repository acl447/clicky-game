# Clicky Game!

This is a fun game to test your memory. Click on a picture, and if you click the same one more than once, game over! See if you can remember which pictures you already clicked!

Technologies used to make this app are React, Git, JavaScript, CSS, Bootstrap and HTML5. 

To make this app I first created the React app, and followed instructions in the README file to deploy to Github Pages. I then added React components including an ImageCard component, and added an onClick property to the ImageCard. 

Clicking an image triggers a JavaScript function, which shuffles the array of image cards, and increases the score by one if an image has only been clicked once. 

I used Bootstrap and CSS for styling and the shake animation when a picture has already been clicked. I stored the message shown in the Navbar -- "Click an image to begin!" -- in the React state, so that the message could change to "You guessed correctly!" and "Picture has already been clicked! Click to start a new game!". 