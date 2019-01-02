---
templateKey: blog-post
draft: false
date: 2019-01-02T23:13:49.583Z
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

"Hooks" is a new feature due to land in the 16.8 release of React. They allow you to reuse logic between your React components. Anyone who has used React for more than a few weeks should understand the frustration of lifting state higher and higher into your application and the complexity that ensues. _Sure_, Redux can help with this, but it can quickly become a bind when working on applications with lots of very similar, _yet_, subtly different state trees.

## So what are hooks and why can they help me?

- Hooks are just functions that can be used to implement a trait used across many React components.
- Like all functions, they can be [composed](https://en.wikipedia.org/wiki/Function_composition) to build higher-level features
- Hooks provide means to use React features in functional components previously limited to class components such as state and side-effects

## So how do I use them?

Though hooks can be used right now, they are only available in the `16.7.0-alpha.2` release of React. I have created a codepen that implements a simple counter app using this build of React.

<iframe class="mobile-full-width" height='320' scrolling='no' title='Hooks counter' src='//codepen.io/luk707/embed/preview/maqpJd/?height=320&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/luk707/pen/maqpJd/'>Hooks counter</a> by Luke Harris (<a href='https://codepen.io/luk707'>@luk707</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Although this is a simple application, it may help make any questions you have a little clearer. I want to bring attention to a specific part of the code:

```js
const [count, setCount] = useState(0)
```

`useState` is one of the built-in React hooks. It accepts an initial state and then gives you its value: (`count`), and a means to change it: (`setCount`). This example would previously have been impossible to implement without using a class component.

## Sound great; but are there any drawbacks?

With hooks, there is a big _gotcha_ that may confuse you if you're not careful. Because hooks themselves are invoked on each component render, the only way React can know which is which is through the order they were used in each component instance. What this means for you is that you can't use any conditionals such as `if` or `switch` as that would lead to your hooks to be called out of order. Because of this react have defined some [rules of hooks](https://reactjs.org/docs/hooks-rules.html); should you follow these you will have no problem using hooks. There is even a [linter plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) for [eslint](https://eslint.org/) that makes it easy to spot anywhere you break these rules.

## Summary

If you're invested in React, I encourage you to try them out and learn it's oppurtunities and shorcomings for yourself. Also be sure to checkout react's [hooks faq](https://reactjs.org/docs/hooks-faq.html) and [API reference](https://reactjs.org/docs/hooks-reference.html) as the hooks api is subject to change upon release.
