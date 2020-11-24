---
title: 'Introduction to using Vue slots'
longdate: 'November 24, 2020'
date: '2020-11-24'
keywords: 'vue, vuejs, javascript, js, slots'
---

## So what are slots?

Slots give us another way of populating our components with content. Much like we can pass data into a component via props, we can pass content into slots.

This content can be

```js
// Button.vue
<template>
  <button>
    <slot></slot>
  </button>
</template>
```

```js
// Form.vue
<template>
  ...
  <Button>Submit</Button>
  ...
</template>
```

Now, when the button component is rendered, the content you placed inside the `Button` component will replace the slot within `Button.vue`

Slots however can handle more than just text, they can receive html and also other components.

Just like passing props into a component, you can pass data such from the parent component into the slot

- Why they are helpful
- How to use them
- Default content

And like always, if you ran into any issues, questions or there is something I missed. Please feel free to reach out to me via [Twitter](https://twitter.com/teisenhower) and I'll be happy to help!

Thanks!
