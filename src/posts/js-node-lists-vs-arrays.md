---
title: "NodeList VS Array - How to convert a NodeList to an Array"
longdate: "May 15, 2020"
date: "2020-05-15"
thumbnail: "js-node-lists-vs-arrays.png"
keywords: "nodelist, array, array.from, spread, operator, javascript, js"
---

If you've ever tried to use a `.map`, `.sort` or any other array method besides `.forEach` on a set of data you've gathered using `.querySelectorAll` then you're probably all too familiar with this error, `.map is not a function`. _(replace `.map` with whatever method you're attempting to use)_. Well here is why.

## NodeList VS Array

What gets returned from your `.querySelectorAll` is what's called a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList). More specifically a Static NodeList. A NodeList is simply an object that contains a collection of nodes. Alright, so now you may be asking.. What's a node?? A node can be a couple things but in this specific instance it's the element you've selected with your `.querySelectorAll`. While NodeLists may resemble arrays, they differ in a major way. They do not have access to all the great methods that arrays do such as `.map`, `.sort`, etc.

## So how can I convert these _'NodeLists'_ ?

There are two ways in which you can convert a NodeList to an array. One approach is to use the [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method. This will create a new array containing all the items _(nodes)_ inside of the NodeList you pass it.

For this example, let's say we wanted to gather all the `<li>` elements on the page to then run `.map` over them. Here is how we can convert that NodeList to an array using `Array.from()`, giving us access to the array methods we need.

```js
// listItems will contain your NodeList of <li> elements
const listItems = document.querySelectorAll("li")

// declare a new array and initialize it to be an array from our listItems NodeList
const myArray = Array.from(listItems)
```

And that's it. We now have an array, `myArray`, that contains all the elements from our `.querySelectorAll`. Now, that was a long-winded example to help demonstrate how this works. Thankfully you don't need to define multiple variables to achieve this like we did above. You can easily shorthand this, turning it into a one-liner by simply doing the following.

```js
const listItems = Array.from(document.querySelectorAll("li"))
```

The second way you can convert NodesLists is by taking advantage of the ES6 [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). The Spread Operator takes every item out of an iterable, in this case our iterable is a NodeList, and spreads those items into areas such as the arguments in a function or in this case, an array. Keeping with the same goal of grabbing all the `<li>` elements, here is an example using the Spread Operator.

```js
const listItems = document.querySelectorAll("li")

// declare a new array and spread listItems into the array
const myArray = [...listItems]
```

And yet again this example can be reduced to a nice and neat one-liner like so.

```js
const listItems = [...document.querySelectorAll("li")]
```

So there you have it. How NodeLists differ from Arrays and how you can quickly convert them. Play around with these methods, see which solution you prefer. I really hope this finds someone in need of some help, I know I've run into this a time or two.

## Need help?

Reach out to me via [Twitter](https://twitter.com/teisenhower)! Happy to help out!

### Photo Credit

### Header photo by [Faris Mohammed](https://unsplash.com/pkmfaris) on Unsplash
