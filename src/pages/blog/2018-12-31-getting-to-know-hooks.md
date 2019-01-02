---
templateKey: blog-post
draft: true
date: 2018-12-31T12:27:38.129Z
title: Getting to know hooks
description: Some description to go here
featuredImage: /img/screenshot-2018-12-28-at-22.16.17.png
relatedPosts:
  - 2018-10-30-hello-again
tags:
  - js
  - react
  - hooks
---

Hooks are a new feature coming to react that lets you define stateful logic for a react component independent to the component itself.

## Why might I use hooks?

- In some instances, you may see a substantial reduction in the amount of code required to achieve something, all while keeping the code "easy to reason about".
- You do not have to use hooks for everything and you shouldn't. Hooks are great at solving some problems, but not others; so consider it another new tool at your disposal.
- Hooks are easy to adopt, you'll find yourself writing them in no time.

## Should I learn hooks?

Although hooks are useful, you may not need them just yet. If you already have a big application and it already logically organises state, then it is likely that you won’t see the benefits of it unless you are working on new, isolated components. I certainly think it is worth playing with and learning the benefits and shortcomings for yourself such that you can make a measured decision to invest the time to use it.

## Gotcha's

Since hooks can seem "mysterious" at first because it is not completely clear as to how they work, I would argue it’s essential to have at least a basic understanding of how they work to use them correctly. One important thing to note is that hooks should only be called from within a component or a custom hook. If you try to use a hook from outside the context of React, it does not work. It might be worth taking a look at [how hooks are associated with components](https://reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components) from the React hooks FAQ should you want to know why; it explains it much better than I can.

## A working example

I have created a small example on codepen that demonstrates the use of React hooks, specifically the `useState` hook to create a counter. Please feel free to fork the pen and play around with hooks for yourself.

Also, be sure to take a look at the official [rules of hooks](https://reactjs.org/docs/hooks-rules.html) documentation on the react website.

<iframe class="mobile-full-width" height='320' scrolling='no' title='Hooks counter' src='//codepen.io/luk707/embed/preview/maqpJd/?height=320&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/maqpJd/'>Hooks counter</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Below is the same example without hooks, _notice how much more verbose it is_.

<iframe class="mobile-full-width" height='320' scrolling='no' title='State counter' src='//codepen.io/luk707/embed/preview/KbyQLP/?height=320&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/KbyQLP/'>State counter</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
