---
templateKey: blog-post
date: 2018-12-31T12:27:38.129Z
title: Getting to know hooks
description: >-
  Some description to go here
featuredImage: /img/screenshot-2018-12-28-at-22.16.17.png
relatedPosts:
  - 2018-10-30-hello-again
tags:
  - js
  - react
  - hooks
---

Hooks are a new feature coming to react that will let you define stateful logic for a react component indpendant to the component itself. This is useful for reasons including but not limeted to:

- Reducing number of lines needed to create complex components
- Reduction of

## Should I learn hooks?

Although hooks are useful, you may not need them just yet. If your application is large and already organises state in a reasonable manner then it is likely that you won't see the benefits of it unless you are working on new isolated components. I certainly think it is worth playing with and learning the benefits and shorcomings for yourself such that you can make a measured descision as to invest the time to use it.

## Gotcha's

Since hooks can seem magic at first it's important to have at least a basic understanding of how hooks is able to acheive what it does.

Since react has no understanding of the xompon

Take a look at the official [rules of hooks](https://reactjs.org/docs/hooks-rules.html) documentation on the react website.

## A working example

I have created a small example on codepen that demonstrates the use of react hooks, specifically the `useReducer` hook to create a counter. Please feel free to fork the pen and play around with hooks for yourself.

<iframe class="mobile-full-width" height='320' scrolling='no' title='Hooks counter' src='//codepen.io/luk707/embed/preview/maqpJd/?height=320&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/maqpJd/'>Hooks counter</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
