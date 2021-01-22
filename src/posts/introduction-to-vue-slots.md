---
title: 'Introduction to usings slots in Vue.js'
longdate: 'January 22, 2021'
date: '2021-01-22'
keywords: 'vue, vuejs, javascript, js, slots'
---

## So.. What are slots?

In the simplest definition. Slots are highly dynamic elements used to populate our components with content. They allows our components to be flexible and therefor reusable. The Vue docs refers to slots as _"distribution outlets for content"_.

Much like how we can pass data into a component via props, slots are the content equivalent. Slots allow our components to be more agile and less dependent on potentially large amounts of props.

While props and slots are similar in the simplest definition, they give us the ability to pass information to a component, they have a quite a few differences.

Let's build a basic card component as an example to demonstrate. If you want to follow along, clone the starting [source code](https://github.com/teisenhower/Vue_slots_demo) from Github.

I also feel that it is important to note that the concept of slots is not just specific to Vue. For example, I recently used slots inside a [Symfony](https://symfony.com/) _(PHP)_ based project.

## Defining slots

Just like how we need to defined the props we want our component to accept, we need to defined slots within our component. This is done by simply adding `slot` tags where you want your dynamic content to be placed.

In our example, we want the `h1` in our Card component to accept dynamic slot content. To do this, add empty `slot` tags inside of the `h1`. That's it, this component is now ready to accept content and place it into the available slot.

```html
// Card.vue
<template>
  <div id="card">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>
```

### How do we pass content into this slot?

With props, our data is passed into components via attributes. With slots, it's a little simpler. The content you want the slot to display simply goes between the opening and closing tags of your component.

```html
// App.vue
<template>
  <div id="app">
    <Card>Content for our H1</Card>
  </div>
</template>
```

Now, when our Card component is rendered, the `<slot></slot>` element will be replaced with the content we put inside the `Card` tags. This is the simplest way to take advantage of slots.

### Default content

What if you only want the content in this slot to be dynamic some of the time and you're using this component in several places? Do you need to repeat this same default content in every single instance that component is being used? Thankfully not.

Slots can be provided default content that will be displayed in the event that it has not been given alternative content. Vue referes to this is _"Fallback Content"_ and adding it is incredibly simple. Just add what you want the slot's default content to be between your `slot` tags.

```html
// Card.vue
<template>
  <div id="card">
    <h1>
      <slot>Here is my default content</slot>
    </h1>
  </div>
</template>
```

Now, when we leave our component empty, our default content that we placed inside of our slot will be rendered.

```html
// App.vue
<template>
  <div id="app">
    <Card></Card>
  </div>
</template>
```

### Multiple slots

So what if you want or need multiple slots within a single component? Do you just add more `slot` tags like so?

```html
// Card.vue
<template>
  <div id="card">
    <h1>
      <slot>Default content</slot>
    </h1>
    <h2>
      <slot>Second slot</slot>
    </h2>
  </div>
</template>
```

Unfortunately not. We now need to use what are called Named Slots which will enable us to have multiple slots within a single component. As the name implies, they will have distinct names so we can point our content to the right location.

Thankfully however, turning a slot into a Named Slot is again really simple. We just need to add the `name` attribute to the slot and give it an appropriate name.

```html
// Card.vue
<template>
  <div id="card">
    <h1>
      <slot name="h1">Default content</slot>
    </h1>
    <h2>
      <slot name="h2">Second default</slot>
    </h2>
  </div>
</template>
```

Now that our slots are named, we need to update how we are passing our content into the `Card` component. We need a way of telling each piece of content **which** slot it belongs to. To do this, we need to introduce two things. The `template` tag and the Vue `v-slot` directive. 

Inside of our `Card` component we need to add a `template` for each slot we want to pass content into. Then, inside those template tags, the content we want to pass. 

Each template also needs to be told **which** slot it should use. This is where we use the `v-slot` directive and provide the name of the slot. 

```html
// App.vue
<template>
  <div id="app">
    <Card>
      <template v-slot:h1>H1 Message</template>
      <template v-slot:h2>H2 Message</template>
    </Card>
  </div>
</template>
```

If you still want one or more of the slots to display its default content, you can still just simply not pass it content and only add templates for the slots you do want to pass content to. 

```html
// App.vue
<template>
  <div id="app">
    <Card>
      <template v-slot:h1>H1 Message</template>
    </Card>
  </div>
</template>
```

The `v-slot` directive also has a handy shorthand we can use in order to cleanup our code slightly. Simply replaced `v-slot:name` with `#name`. 

```html
// App.vue
<template>
  <div id="app">
    <Card>
      <template #h1>H1 Message</template>
      <template #h2>H2 Message</template>
    </Card>
  </div>
</template>
```

This will achieve the same outcome but may look slightly cleaner to some. 

## Wrapping up

This is by no means an exhaustive overview of slots and all that they can do for us. Simply an introduction for those who are new to Vue or those looking to use slots for the first time. These elements are powerful and have countless uses so I encourage you to take what you've learned and dive deeper.

As always, if you ran into any issues, questions or there is something I missed. Please feel free to reach out to me via [Twitter](https://twitter.com/teisenhower) and I'll be happy to help!

Thanks!
