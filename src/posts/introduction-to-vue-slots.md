---
title: 'Introduction to using Vue slots'
longdate: 'November 24, 2020'
date: '2020-11-24'
keywords: 'vue, vuejs, javascript, js, slots'
---

## So.. What are slots?

In the simplest definition. Slots are highly dynamic elements used to populate our components with content. The Vue docs refers to slots as *"distribution outlets for content"*.

Much like how we can pass data into a component via props, slots are the content equivalent. Slots allow our components to be more agile and less dependent on potentially large amounts of props. 

While props and slots are similar in regards to giving us the ability to pass information to a component, they have a quite a few differences. 

Let's build a basic card component as an example to demonstrate. If you want to follow along feel free to download the starting source code from my Github.

## Let's use some slots
### Defining slots
Just like how we need to defined the props we want our component to accept, we need to defined slots within our component. This is done simply by adding the `slot` tags where you want your slot content to be placed inside the component. 

In our example we want the `h1` in our Card component to accept slot content. So our template within `Card.vue` would look like this. 
```js
// Card.vue
<template>
  <div id="card">
    <h1><slot></slot></h1>
  </div>
</template>
```

### How do we get content into this slot? 

With props, our data is passed into components via attributes. With slots it's a little simpler. Our content simply goes between the opening and closing tags of your component just like you're already used to doing. 

```js
// App.vue
<template>
  <div id="app">
    <Card>Here is our h1 title</Card>
  </div>
</template>
```
Now, when our Card component is rendered, the `<slot></slot>` element will be replaced with the content we put inside the `MyComponent` tags.






<!-- 

Slots however can handle more than just text, they can receive html and also other components.

Just like passing props into a component, you can pass data such from the parent component into the slot

- Why they are helpful
- How to use them
- Default content

And like always, if you ran into any issues, questions or there is something I missed. Please feel free to reach out to me via [Twitter](https://twitter.com/teisenhower) and I'll be happy to help!

Thanks! -->
