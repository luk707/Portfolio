---
templateKey: blog-post
draft: false
date: 2019-01-06T15:27:26.847Z
title: 'Building an Asteroids clone: Part 1'
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

For a while, I've wanted to build a game. I spent most of my post 16 / college days learning the ins-and-outs of games programming; from the confusion of 4-dimensional matrices to the darn right tediousness of shader programming. Despite all this, I have nothing to show for it.

All too often I start a project with the intent of finishing it but never do. I find it too easy to get caught up on the small details and sometimes I need to take a step back and ask myself - "What do I want to achieve?". By doing so, I find it easier to outline the requirements and set myself weekly goals. For my programming projects, I like to add these goals to [ZenHub](https://www.zenhub.com/) and assign points based on how difficult I think they are likely to be. The tool then helps me predict how long my project is taking and if I am running behind my intended schedule which is especially useful.

I am deciding to set my sights small, (_since this is a side project after all_) and build a simple clone of the asteroids arcade game. Although it would be fun to get my hands dirty with WebGL and 3D graphics, I don't have the time to build a finished project with it; that said, to make the project challenging enough, I am limiting myself on the frameworks/libraries I can use.

## Technologies

For building the leaderboard, I am using React and Axios. I am using MongoDB and Express for creating the leaderboard API. For implementing the networking features, I am using Socket IO. The game itself uses nothing except the browser native canvas APIs and the raw power of javascript (enhanced by TypeScript).

## Project requirements

- The primary player controls: rotate, accelerate and fire
- Asteroids that randomly spawn and split into smaller asteroids once fired upon
- Simple collision (probably just distance based since this can be done quickly using Pythagoras' theorem)
- A leaderboard to save user's scores
- Dedicated server to perform game logic as this prevents cheating the leaderboard

Since the game logic runs on dedicated servers, I could implement a co-op mode after completing the project. I'll consider this in more depth once I get there.

Before I start the project, I need to build a proof of concept. Doing so helps uncover potential problems that may require a change to the initial goal. On my [next post](/blog/2019-01-07-building-an-asteroids-clone-part-2) I am going tackle drawing something to the display and then plotting the points of the spaceship.
