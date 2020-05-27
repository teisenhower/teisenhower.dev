---
title: "Using State in React. Class-Based vs Functional Components"
longdate: "May 27, 2020"
date: "2020-05-27"
thumbnail: "react-state-class-vs-functional.png"
keywords: "react, javascript, js, state"
---

In this article, using simple examples I hope to explain the basics of how you can use state within the two different types of components in [React](https://reactjs.org/).

As the title may have given away, within React we have Class-Based and Functional components. While both of these types will ultimately render your component, how you define and mutate your state within these types is different.

## Class-Based Components

Class-Based components _(as the name may hint at)_ are Javascript classes. The important piece to remember here is when you define a Class-Based component, it needs to extend the React `Component` class. This is because the `Component` class contains certain methods we need access to, the most important one being the `render` method. This method is how React is able to, well.. render our component.

During your journey through React you may hear these types of components called; containers, stateful or smart components.

### Defining a Class-Based Component

You will see these Class-Based components defined 1 of 2 ways.

1. By importing the `Component` class along with React

```jsx
import React, { Component } from "react"
class ClassBasedComponent extends Component {
  render() {
    return <h1>I'm a Class-Based Component</h1>
  }
}
export default ClassBasedComponent
```

2. Or you can just import React by itself and gain access to the `Component` class by using `React.Component`

```jsx
import React from "react"
class ClassBasedComponent extends React.Component {
  render() {
    return <h1>I'm a Class-Based Component</h1>
  }
}
export default ClassBasedComponent
```

### Defining State

How we define state inside of a Class-Based component is by using the reserved keyword `state` and assigning it a value. This value is a [Javascript object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and it represents our initial state. There is nothing fancy or special about this object. We can store any type of data we want within this object; arrays, booleans, integers, etc., just like with objects outside of React

Within the body of our class but outside of the `render` method, I'm going to define our `state` and set a single property, `fontColor` and assign it the value red.

```jsx
import React, { Component } from "react"
class ClassBasedComponent extends Component {
  state = {
    fontColor: "red",
  }
  render() {
    return <h1>I'm a Class-Based Component</h1>
  }
}
export default ClassBasedComponent
```

We can then use this `fontColor` property to style our `<h1>` using an inline-style, making it red.

> There are other ways of styling your React components, this method is just simpler for these examples.

```jsx
import React, { Component } from "react"
class ClassBasedComponent extends Component {
  state = {
    fontColor: "red",
  }
  render() {
    const style = {
      color: this.state.fontColor,
    }
    return (
      <div id="App">
        <h1 style={style}>I'm a Class-Based Component</h1>
      </div>
    )
  }
}
export default ClassBasedComponent
```

When you start your dev server, you should now see this component rendered to your page.

![class-based part1](https://s3.amazonaws.com/teisenhower.dev/2020-05-27/class-based_p1.png)

### Mutating State

When we want to change something in our state _(mutate it)_, you may have heard people say, "don't mutate your state directly". This means for example, we wouldn't want to do something like this.

```jsx
this.state.fontColor = "green"
```

React will not acknowledge this and will also give you a console warning. To properly mutate our state, we instead want to use a method that is made available to us via the `Component` class we discussed earlier. This method is called `setState`.

The `setState` method takes in an object as an argument. Since we are attempting to update our state, this object should contain all of our new state values. `setState` will take this object and _merge_ it with our current state object. **Merge** being the important word here. More on this later.

Let's now add a method _(function)_ to our component and call it `changeColor`. The purpose of this method is simple. Update the value of our `fontColor` property to "green" by passing an object to the `setState` method.

This method will go inside the body of our class but outside the `render` method. We need to use `this.setState` since we are referring to our class which contains the `setState` method.

```jsx
import React, { Component } from "react"
class ClassBasedComponent extends Component {
  state = {
    fontColor: "red",
  }
  changeColor = () => {
    this.setState({
      fontColor: "green",
    })
  }
  render() {
    const style = {
      color: this.state.fontColor,
    }
    return (
      <div id="App">
        <h1 style={style}>I'm a Class-Based Component</h1>
      </div>
    )
  }
}
export default ClassBasedComponent
```

Let's add a button to our component that we'll use to call our `changeColor` method.

Inside our `render` method, underneath of our `<h1>`, add a button and set its text to "Change Font Color".

Our return statement should now look like this. A `<h1>` with the text _"I'm a Class-Based Component"_ and a button that says _"Change Font Color"_ wrapped with an outer `<div>`.

```jsx
return (
  <div id="App">
    <h1 style={style}>I'm a Class-Based Component</h1>
    <button>Change Font Color</button>
  </div>
)
```

> When you ask React to render more than one JSX element, you need to enclose these elements inside another element like a simple `<div>`. Giving the outer `<div>` an id of "App" is not important for this example.

In order for this button to actually call our method, we need to pass `changeColor` as a reference to the button's `onClick` listener. And again since we are within a class we need to use `this` to properly call our method.

```jsx
<button onClick={this.changeColor}>Change Font Color</button>
```

> **Notice the camel case syntax here for 'onClick'.** Remember, this is JSX, not HTML and there are some small yet very important differences that can and will trip you up at times.

We should now be able to click our button which will change the `fontColor` property in our state to contain the value green instead of red. This change to our state triggers React to search the DOM and update the areas that need to reflect our new state. Since we are using state to assign our color, the `<h1>` should change to green.

![class-based part2](https://s3.amazonaws.com/teisenhower.dev/2020-05-27/class-based_p2.gif)

## Functional Components

Functional components _(again, as the name may hint at)_ are simply Javascript functions. You may hear this type called; presentational, stateless or dumb components.

### Defining a Functional Component

You may also see these types defined in multiple ways. The two most common ways I've seen are by writing a normal Javascript function or the approach preferred by most, an Arrow Function.

1.  With a normal Javascript function, you simply define your function using the `function` keyword. Then from this function return the JSX that you want rendered.

```jsx
// Regular Function
import React from "react"
function FunctionalComponent() {
  return <h1>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

2. Or again the more popular and preferred way, using an Arrow Function. Here the body of the function is still the same. We are just returning the JSX that we want React to render.

```jsx
// Arrow Function
import React from "react"
const FunctionalComponent = () => {
  return <h1>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

### Defining State

Prior to React v16.8, state was only available to us via Class-Based components. But with the v16.8 update, React introduced a new feature called [React Hooks](https://reactjs.org/docs/hooks-intro.html). This provided a way for Functional components to contain their own state by using a hook called `useState`.

> Don't let the term hooks overwhelm you. They are just a library of functions made available to you by React.

We first need access to this `useState` hook. This can be done in much the same way as we gained access to the `Component` class from React.

1. By importing `useState` along with React

```jsx
import React, { useState } from "react"

const FunctionalComponent = () => {
  return <h1>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

2. Or by using `React.useState`

```jsx
import React from "react"

const FunctionalComponent = () => {
  React.useState(...)
  return <h1>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

### Using the `useState` hook

This is where we see our first major difference between Class-Based and Functional components. How we set our initial state.

`useState` gets treated like a function and it takes one argument, any form of data, it doesn't **need** to be an object. I can be an integer, boolean, strings etc. This differs from `state` and `setState` where we needed to provide an object.

These are all valid state definitions using `useState`

```jsx
// string
useState("red")
// integer
useState(100)
// boolean
useState(true)
// object
useState({
  fontColor: "red",
})
```

For consistency, I will continue using an object with the `fontColor` property and setting its initial state to red. I will also import `useState` instead of using `React.useState`.

```jsx
import React, { useState } from "react"

const FunctionalComponent = () => {
  useState({
    fontColor: "red",
  })
  return <h1>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

When `useState` gets called, two elements are returned to us

1. The current state
1. A function that allows us to update this state

These elements are returned in the form of an array. This allows us to take advantage of array destructuring, giving us access to these elements and allowing us to give them meaningful names.

> I have another [post](https://www.teisenhower.dev/posts/js-destructuring/) that walks you through destructuring both arrays and objects.

Let's update our code slightly to destructure our `useState`.

```jsx
import React, { useState } from "react"

const FunctionalComponent = () => {
  const [myState, setMyState] = useState({
    fontColor: "red",
  })
  return <h1>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

Here we are assigning the first element returned, our state, to the variable `myState`. And assigning the second element returned, the function that will allow us to update our state, to the variable `setMyState`.

### Using the returned state

Now that our state is defined, let's use it to make our `<h1>` red, just like we did for our Class-Based example, using inline-styling.

Our `style` constant should be inside of our function body but outside of our return statement.

```jsx
import React, { useState } from "react"

const FunctionalComponent = () => {
  const [myState, setMyState] = useState({
    fontColor: "red",
  })
  const style = {
    color: myState.fontColor,
  }
  return <h1 style={style}>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

Remember, we are no longer in a class and our state now lives in the variable `myState`. So we cannot use `this.state` to access our different state properties. Instead, we need to use the name we gave our state element, `myState` and use dot notation to target the property we want, `fontColor`.

If however we had decided to use a string for our color instead of an object, that solution could look something like this.

We pass `useState` a string, "red". Then to pull this information from our state we can just use the variable `myState` which contains our string, "red".

```jsx
import React, { useState } from "react"

const FunctionalComponent = () => {
  const [myState, setMyState] = useState("red")
  const style = {
    color: myState,
  }
  return <h1 style={style}>I'm a Functional Component</h1>
}
export default FunctionalComponent
```

At this point we should now have our Functional component being rendered like so.

![functional part1](https://s3.amazonaws.com/teisenhower.dev/2020-05-27/functional_p1.png)

### Updating our state

To update our state, we use the function that was returned to us from `useState`, which we assigned to `setMyState`.

This function, just like `useState`, takes in any form of data. The function will take this data and _replace_ your old state with this new state data. **Replace** being the important word in this scenario. Again, more on this soon.

Let's create a function and call it `changeColor` just like before. The syntax to define our `changeColor` function needs to be altered slightly. Again, we are no longer in a class so we are now defining a function instead of a method. In order to define a function within a function we either need to use the `function` keyword or use an arrow function assigned to a constant. I am going to use the arrow function approach.

Let's also add our button needed to call this function.

```jsx
import React, { useState } from "react"

const FunctionalComponent = () => {
  const [myState, setMyState] = useState({
    fontColor: "red",
  })
  const style = {
    color: myState.fontColor,
  }
  const changeColor = () => {
    setMyState({
      fontColor: "green",
    })
  }
  return (
    <div>
      <h1 style={style}>I'm a Functional Component</h1>
      <button>Change Font Color</button>
    </div>
  )
}
export default FunctionalComponent
```

We again need to pass this function to the `onClick` listener on our button, however we don't use `this`. We just need to supply the name of our function, `changeColor`.

```jsx
<button onClick={changeColor}>Change Font Color</button>
```

![functional part2](https://s3.amazonaws.com/teisenhower.dev/2020-05-27/functional_p2.gif)

We now have a Functional component using the `useState` hook in order to set its initial state and update its state.

## Ok.. what about this Merge and Replace??

Remember when I said `setState` _merges_ your new state with the old and how `useState` _replaces_ your old state with your new state. This is where we see the second major difference.

### Example of setState vs useState

Let's say we had a second property in our state object for font weight.

```jsx
{
  fontColor: "red",
  fontWeight: 600,
}
```

If we call `setState` and pass it an object that just contains the `fontColor` property, changing it to "green". `setState` will only update our `fontColor` property and leave `fontWeight` as is. _Merging_ these two states together.

If we use `useState` and pass the same object that just contains `fontColor`, our `fontWeight` property would be removed since `useState` _replaces_ your old state. When we use `useState` we need to explicitly send all of our state data even if it is not receiving an update.

```jsx
// state after `setState` call
{
  fontColor: "green",
  fontWeight: 600,
}
// state after `useState` call
{
  fontColor: "green",
}
```

### Multiple useState calls

Thankfully there is a way around this and it is the third major difference. We can use `useState` as many times as we want within our Functional components creating multiple instances of state. Unlike in our Class-Based components where we can only call `state` once.

So to avoid either sending redundant data to `useState` or having our data deleted, we just split our state across multiple `useState` calls.

```jsx
const [myColor, setMyColor] = useState({
  fontColor: "red",
})
const [myWeight, setMyWeight] = useState({
  fontWeight: 600,
})
```

Now we can use the `setMyColor` function and only pass it the data needed to change our color to green. Our `fontWeight` will remain intact since it lives in a different state instance.

## Let's wrap this up..

As I was writing this I felt that certain areas deserved a little more detail and explanation. So this article definitely turned out longer than I planned. If you stuck with me till the end, you're awesome.

And like always, if you ran into any issues, questions or there is something I missed. Please feel free to reach out to me via [Twitter](https://twitter.com/teisenhower) and I'll be happy to help!

Thanks!

#### Header photo by [Carson Arias](https://unsplash.com/carsonarias) on Unsplash
