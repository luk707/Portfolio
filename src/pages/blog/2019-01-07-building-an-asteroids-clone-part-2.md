---
templateKey: blog-post
draft: false
date: 2019-01-07T08:45:00.000Z
title: 'Building an Asteroids clone: Part 2'
description: >-
  Join me on my project where I will build a clone of the infamous asteroids arcade game.
featuredImage: /img/screenshot-2018-12-28-at-22.16.17.png
relatedPosts: []
tags:
  - js
  - canvas
  - asteroids
  - game
  - project
---

## Painting the canvas

Continuing from my [previous post](/blog/2019-01-06-building-an-asteroids-clone-part-1), I now need to get something onto the screen. The canvas context API makes it possible to draw lines and shapes on the screen so it should be a nice place to start. For reference, [w3schools](https://www.w3schools.com/graphics/canvas_intro.asp) has an excellent canvas introduction tutorial and documentation for working with the canvas context API, this should be helpful should you be interested in having a go with it yourself. I have created a pen to demonstrate drawing such a line to the screen below.

<iframe class="mobile-full-width" height='512' scrolling='no' title='1: Drawing a line' src='//codepen.io/luk707/embed/preview/yGKZZq/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/yGKZZq/'>1: Drawing a line</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Note how there is only 1 line of HTML and about 9 lines of CSS in this project. Since I only need to get a canvas element on the page and make it fill the screen, there's surprisingly little work to be done here. The canvas tag is what allows me to make an area that I can present the game onto the screen. I have given it an ID of `game` to let me reference it later in the JavaScript code.

```js
// Reference to the canvas instance
const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
```

Using the document API, I request the canvas element from the DOM. Since it is a canvas element, the `canvas` variable now holds an instance of [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement). One of the methods of the `HTMLCanvasElement` is called `getContext`; when called with the argument `"2d"` it returns a [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D). I store this context in a variable named `context` for later use.

By default, a canvas element has a resolution of 300x150. Since I want the game to be full screen, I need to change the resolution to match that of the inner width of the window. I can do this by adding the following lines of code.

```javascript
// Set the canvas dimensions to match that of the screen
canvas.width = window.innerWidth
canvas.height = window.innerHeight
```

Currently, this code is only run once when the game initialises. Later on, I am going to attach this to the browser resize event to prevent the game from stretching when the browser viewport changes.

After using a rectangle to set the screen black, to test the water, I draw a line on the screen.

```javascript
// Tell the context we want to begin a path
context.beginPath()
// Move the pen to the top left corner of the canvas
context.moveTo(0, 0)
// Draw a line with the pen to the bottom right corner of the canvas
context.lineTo(canvas.width, canvas.height)
// Set the context stroke style to white
context.strokeStyle = 'white'
// Draw a the line
context.stroke()
```

At the moment the code is looking very procedural because we are only setting the game up to paint a single frame before the code finishes execution. Later on, I need to set up a game loop so I can begin moving things around on the screen.

## Plotting the outline of the spaceship

I have defined some coordinates for the shape of the ship:

```javascript
// Define the points of the ship
const shipPoints = [
  [1, 0],
  [-0.714, 0.571],
  [-0.429, 0.286],
  [-0.429, -0.286],
  [-0.714, -0.571],
]
```

I have done so using a two-dimensional array, each pair of numbers represents a point on the ship. They are defined clockwise from the nose of the ship at the point `(1, 0)`. By defining the information like this, it makes it easy to make adjustments to the shape of the ship If I wish to do so later.

To render the points onto the display, I have to manipulate these points to fit the screen better. One way of doing this is by using the array `map` and `forEach` functions.

```javascript
// Keep track of the smallest screen dimension. This is
// used to prevent drawing the ship off the edge of the display
const squareSize = Math.min(canvas.width, canvas.height)

// Tell the context we want to begin a path
context.beginPath()

shipPoints
  // Scale the ship to half the size of the screen
  .map(([x, y]) => [(x * squareSize) / 4, (y * squareSize) / 4])
  // Position the ship in the center of the screen
  .map(([x, y]) => [x + canvas.width / 2, y + canvas.height / 2])
  // Draw the points
  .forEach(([x, y], index) => {
    // If this is the first point, move the pen to that location
    if (index === 0) {
      context.moveTo(x, y)
      return
    }
    // Else draw a line from the previous location to the current
    context.lineTo(x, y)
  })

// Join the path back to the first point
context.closePath()

// Set the context stroke style to white
context.strokeStyle = 'white'

// Draw the line
context.stroke()
```

After doing this, I end up with the ship displayed nicely in the centre of the screen:

<iframe class="mobile-full-width" height='512' scrolling='no' title='2: Plotting the outline of the spaceship' src='//codepen.io/luk707/embed/preview/WLJbje/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/WLJbje/'>2: Plotting the outline of the spaceship</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

For my next post I will show you how I create the game loop and listen to player input.
