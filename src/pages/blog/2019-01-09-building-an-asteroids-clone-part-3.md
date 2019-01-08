---
templateKey: blog-post
draft: false
date: 2019-01-09T08:45:00.000Z
title: 'Building an Asteroids clone: Part 3'
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

## The game loop

[Last post](/blog/2019-01-07-building-an-asteroids-clone-part-2) I drew the ship to the screen, today, I make it move. The first step I am taking to get it to move is to implement a game loop function. Because games have to update their state very frequently, like "60 times a second" frequently; I have moved the core functionality of this into a function called loop.

```javascript
function loop() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Call the update method
  update()

  // Call the render method
  render(context, mapWorldToScreenSpace)

  // Clip off content out of bounds
  clipScreen()

  // Request the next frame
  window.requestAnimationFrame(loop)
}
```

This function is responsible for cleaning up the canvas, updating the state of the game before finally rendering the game. On the last line of the loop, I invoke a function called `requestAnimationFrame`. This function tells the browser to run the `loop` function again once the browser has had a chance to finish painting our new updates to the canvas. It also queues this request if the browser window is no longer in the foreground.

Right at the bottom of the I also call this function. This _kicks_ off the game loop to for as long as you keep your browser window open.

```javascript
// Kick off the game loop
window.requestAnimationFrame(loop)
```

I also referenced two functions in the loop function, called `update` and `render`. I'll explain these in more detail now:

```javascript
// Initialize ship position as center of world
const shipPosition = [worldSize / 2, worldSize / 2]

// Initialize ship velocity
const shipVelocity = [0.2, 0.3]

const update = () => {
  shipPosition[0] += shipVelocity[0]
  shipPosition[1] += shipVelocity[1]
  if (shipPosition[0] < 0) {
    shipVelocity[0] = Math.abs(shipVelocity[0])
  }
  if (shipPosition[0] > worldSize) {
    shipVelocity[0] = -Math.abs(shipVelocity[0])
  }
  if (shipPosition[1] < 0) {
    shipVelocity[1] = Math.abs(shipVelocity[1])
  }
  if (shipPosition[1] > worldSize) {
    shipVelocity[1] = -Math.abs(shipVelocity[1])
  }
}
```

The update function is called once every frame. Here I get a chance to update the state of the game. For now, I have set it up to move forever and bounce off of the walls of the screen much like the old DVD screensavers. I do this by moving the ship's `X` and `Y` position by a small amount each frame. _This amount is called the velocity_. Then I check if the ship has moved off the edge of the screen. If it has, I update the corresponding component of the velocity and invert it such that it bounces off of the edge.

```javascript
const render = (context, mapWorldToScreenSpace) => {
  // Tell the context we want to begin a path
  context.beginPath()

  shipPoints
    // Position the ship
    .map(([x, y]) => [x + shipPosition[0], y + shipPosition[1]])
    // Map points to screen space
    .map(mapWorldToScreenSpace)
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
}
```

The render method probably looks familiar; this is because all I have changed from the last example is how the points map to the screen. The first thing I do is map each point such that it is at the position calculated from the update method. Then I use a function that I have written to make it easier when working with different size screens; its purpose is to allow me to define points within a 50 x 50 grid and then it maps it to fill the users' screen regardless of their display resolution. Here is the result:

<iframe class="mobile-full-width" height='512' scrolling='no' title='3: The game loop
' src='//codepen.io/luk707/embed/preview/maLJVb/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/maLJVb/'>3: The game loop
</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Listening to user input and moving a player

Video games by definition react to user input. I think the next logical thing to do is listen to the keyboard and make the world update accordingly. To make a simple input management system, I can listen to when the keyboard keys are pressed and released and add their keycodes to an array of currently pressed keycodes.

```javascript
// Create an array to hold the currently pressed key codes
let keys = []
```

I am listening to both the on `keyup` and `keydown` events present on the window. Now the result of pressing a key adds it to the array and releasing a key removes it:

```javascript
// Input event handlers
const handleKeyDown = e => {
  e.preventDefault()
  if (!keys.includes(e.keyCode)) {
    keys.push(e.keyCode)
  }
}

const handleKeyUp = e => {
  e.preventDefault()
  keys = keys.filter(key => key !== e.keyCode)
}

window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keyup', handleKeyUp)
```

The array is now populated with any key currently pressed. To make the ship move all I have to do change the position of the ship in the update method based on the currently pressed keys:

```javascript
// These are the keycodes for the arrow keys on the keyboard.
const upKey = 38
const downKey = 40
const leftKey = 37
const rightKey = 39

const update = () => {
  if (keys.includes(upKey)) {
    shipPosition[1] -= 0.1
  }
  if (keys.includes(downKey)) {
    shipPosition[1] += 0.1
  }
  if (keys.includes(leftKey)) {
    shipPosition[0] -= 0.1
  }
  if (keys.includes(rightKey)) {
    shipPosition[0] += 0.1
  }
}
```

The result is that now the ship moves whenever the user presses the arrow keys:

<iframe class="mobile-full-width" height='512' scrolling='no' title='4: Listening to user input and moving a player' src='//codepen.io/luk707/embed/preview/KbRpxQ/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/KbRpxQ/'>4: Listening to user input and moving a player</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
