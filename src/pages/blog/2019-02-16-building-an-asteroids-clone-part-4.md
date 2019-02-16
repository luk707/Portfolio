---
templateKey: blog-post
draft: false
date: 2019-02-16T12:19:48.311Z
title: 'Building an Asteroids clone: Part 4'
description: >-
  Join me on my project where I will build a clone of the infamous asteroids
  arcade game.
featuredImage: /img/gatsby-icon.png
tags:
  - js canvas asteroids
---
\## Commonalities between game world objects 



As much as I love functional programming in the React world, games do not benefit from it as well. I find that Object orientation is a much more sensible approach due to the commonalities between the objects in the game. Whether it is a ship, a bullet or an asteroid, it needs to know its current position, velocity and rotation. It also needs to update and draw itself on the screen. Because of this, it makes sense to make a class that encapsulates some of the logic shared by all these types of object, and then extend from them for their specific features.



\`\``javascript

class GameObject {

  position = \[worldSize / 2, worldSize / 2];

  velocity = \[0, 0];

  points = \[];

  constructor(points) {

\    this.points = points;

  }

  update(dt) {

\    this.position\[0] += this.velocity\[0] * dt / 1000;

\    this.position\[1] += this.velocity\[1] * dt / 1000;

  }

  render(context, mapWorldToScreenSpace) {

\    context.beginPath();

\    this.points

\    .map((\[x, y]) => \[x + this.position[0], y + this.position\[1]])

\    .map(mapWorldToScreenSpace)

\    .forEach((\[x, y], index) => {

\    if (index === 0) {

\    context.moveTo(x, y);

\    return;

\    }

\    context.lineTo(x, y);

\    });

\    context.closePath();

\    context.strokeStyle = 'white';

\    context.stroke();

  }

}

\`\``



Having made the \`GameObject\` class, it should now be easy to re-implement the player to extend from it.



\`\``javascript

class Ship extends GameObject {

  speed = 6

  constructor() {

\    super([

\    \[1, 0],

\    \[-0.714, 0.571],

\    \[-0.429, 0.286],

\    \[-0.429, -0.286],

\    \[-0.714, -0.571]

\    ]);

  }

  update(dt) {

\    if (keys.includes(upKey)) {

\    this.position\[1] -= dt / 1000 * this.speed;

\    }

\    if (keys.includes(downKey)) {

\    this.position\[1] += dt / 1000 * this.speed

\    }

\    if (keys.includes(leftKey)) {

\    this.position\[0] -= dt / 1000 * this.speed

\    }

\    if (keys.includes(rightKey)) {

\    this.position\[0] += dt / 1000 * this.speed

\    }

  }

}

\`\``



It is now significantly more clear what is going on because all of the logic for the player is held together more tightly. Doing this has significantly reduced the complexity of the update and render methods too:



\`\``javascript

// Create an instance of the player

const player = new Ship();



const update = (dt) => {

\    player.update(dt);

};



const render = (context, mapWorldToScreenSpace) => {

  player.render(context, mapWorldToScreenSpace);

};

\`\``



<iframe class="mobile-full-width" height='512' scrolling='no' title='6: Commonalities between game world objects' src='//codepen.io/luk707/embed/preview/Xoqmar/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/Xoqmar/'>6: Commonalities between game world objects</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.

</iframe>
