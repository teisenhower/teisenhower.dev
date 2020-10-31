---
title: "Destructuring Objects and Arrays in Javascript"
longdate: "May 13, 2020"
date: "2020-05-13"
keywords: "javascript, destructuring, js, object, arrays"
---

Let's say we have the following object and we want to access the data within it

```js
const object = {
  company: "Company Name",
  address: "30 Javascript Road",
  links: {
    website: "https://www.company.com",
    twitter: "https://twitter.com/company",
  },
}
```

Typically when we want to pull data from an object, we see something like this.

```js
const companyName = object.company
const companyAddress = object.address
// or
const companyName = object["company"]
const companyAddress = object["address"]

console.log(`${companyName} - ${companyAddress}`)
// Company Name - 30 Javascript Road
```

We declare multiple variables over several lines using dot-notation or bracket notation in order to access our data. While this works and is correct, destructuring allows us to cut down on the amount of code needed making it easier to maintain.

## Destructuring Objects

Instead of defining multiple variables resulting in a lot of code duplication, we can take advantage of destructuring. With destructuring we use the property names that contain the data we want in order to access its data. Destructuring takes those property values and uses them as our variable names.

```js
const { company, address } = object
console.log(`${company} - ${address}`)
// Company Name - 30 Javascript Road
```

_"But what if I want or need to use different variable names?"_ We can utilize destructuring and while also maintaining the flexibility of defining our own variable names. That methods looks like this.

```js
const { company: companyName, address: companyAddress } = object

console.log(`${companyName} - ${companyAddress}`)
// Company Name - 30 Javascript Road
```

Here we are saying I want the value from `company` assigned to the variable `companyName` and I want the value from `address` assigned to the variable `companyAddress`

## Nested objects

Say we want to pull the company's links. We can still use destructuring to pull this data even though it's nested. There are several ways we can accomplish this. Let's look at one way.

Just like above we still want to use the property name `links` to access its data. However, here we need to go one level deeper and also pull the properties from this nested object.

```js
const {
  links: { website, twitter },
} = object

console.log(`${website} - ${twitter}`)
// https://www.company.com - https://twitter.com/company
```

If this "destructuring inception" looks like a little too much, don't worry. We have another way to achieve the same result. We can combine destructuring with dot-notation. This says go to `object.links` and pull out both the `website` and `twitter` properties. The closely resembles our very first example above.

```js
const { website, twitter } = object.links

console.log(`${website} - ${twitter}`)
// https://www.company.com - https://twitter.com/company
```

We can still assign our own variable names to this data in the nested objects in the same way as before.

```js
// full destructuring
const {
  links: { website: companyWebsite, twitter: companyTwitter },
} = object

console.log(`${companyWebsite} - ${companyTwitter}`)
// https://www.company.com - https://twitter.com/company
```

```js
// destructuring mixed with dot-notation
const { website: companyWebsite, twitter: companyTwitter } = object.links

console.log(`${companyWebsite} - ${companyTwitter}`)
// https://www.company.com - https://twitter.com/company
```

## Destructuring Arrays

We can also destructure arrays in much the same way. Say we have this array with links to some of our favorite sites.

```js
const links = ["github.com", "twitter.com", "facebook.com"]
```

Instead of doing something like this.

```js
const github = links[0]
const twitter = links[1]
const facebook = links[2]

console.log(`${github} - ${twitter} - ${facebook}`)
// github.com - twitter.com - facebook.com
```

We can write a simple destructuring assignment to gain access to these values.

The big difference here is we obviously don't have property names, so we will need to define our own variable names. Order matters here, this will assign the value at array index _n_ with the corresponding name at the same index you defined.

```js
const [github, twitter, facebook] = links

console.log(`${github} - ${twitter} - ${facebook}`)
// github.com - twitter.com - facebook.com
```

We don't need to define a variable for each item in the array we are destructuring. If we only supply 1 name, it will only pull the first item and assign it to the variable you defined.

```js
const [github] = links
console.log(github)
// github.com
```

What if you wanted to pull data from a specific index in the middle or towards the end of an array? Do you need to define variables for all those items in between? Thankfully the answer is no. To do this, simply add a `,` at the index locations you don't want to pull until you've hit the item(s) you want.

Here's an example. I want to only pull github and facebook. So I place a `,` at the location that holds twitter and then define my facebook variable like normal. I have now only created two variables; `github` and `facebook`. If I try accessing the twitter url I will get an error because I have not created a variable for `twitter`.

```js
const [github, , facebook] = links
console.log(`${github} - ${facebook}`)
// github.com - facebook.com
console.log(twitter)
// ReferenceError: twitter is not defined
```

## Nested arrays

Now let's look at a nested array. These are the same sites used above except now each are within an array that contains another array with the names of their founders.

```js
const links = [
  ["github.com", ["Tom Preston-Werner", "Chris Wanstrath", "P. J. Hyett"]],
  ["twitter.com", ["Jack Dorsey", "Evan Williams", "Noah Glass"]],
  ["facebook.com", ["Mark Zuckerberg", "Andrew McCollum", "Eduardo Saverin"]],
]
```

The syntax for destructuring nested arrays is similar to that of destructuring objects. But remember we need to define our own variable names here since we don't have properties **and** remember that order matters. In this example we are only pulling the first item in the array which is GitHub.

```js
const [[github, [gh_founder1, gh_founder2, gh_founder3]]] = links

console.log(`${github} - ${gh_founder1}, ${gh_founder2}, ${gh_founder3}`)
// github.com - Tom Preston-Werner, Chris Wanstrath, P. J. Hyett
```

And just like with single dimensional arrays, if we want to skip an item we add a `,` in its location.

```js
const [
  [github, [gh_founder1, gh_founder2, gh_founder3]], // skipping twitter
  ,
  [facebook, [fb_founder1, fb_founder2, fb_founder3]],
] = links

console.log(`${github} - ${gh_founder1}, ${gh_founder2}, ${gh_founder3}`)
// github.com - Tom Preston-Werner, Chris Wanstrath, P. J. Hyett
console.log(`${facebook} - ${fb_founder1}, ${fb_founder2}, ${fb_founder3}`)
// facebook.com - Mark Zuckerberg, Andrew McCollum, Eduardo Saverin
```

## What about mixed destructuring?

You may run into an instance where you have a more complex object/array data structure. Take this example.

```js
const companies = {
  stores: ["Target.com", "BestBuy.com", "Lowes.com"],
  cars: ["Ford.com", "Chevy.com", "Toyota.com"],
}
```

We have an object named `companies` containing different company categories as its properties. Each category contains an array of company websites. To destructure this we combine the object and array methods from above into one destructure assignment.

```js
const {
  stores: [target, bestBuy, lowes],
} = companies

console.log(`${target} - ${bestBuy} - ${lowes}`)
// Target.com - BestBuy.com - Lowes.com
```

We are first saying we want the `stores` array from the `companies` object. Then we want to pull out the items from that array and assign them the variables we've defined. Remember, we don't need to define a variable name for `stores` since the property name is being used. However we **do** need to define variables for each of the sites we want to pull from its array.

We can do this same thing for the `cars` category.

```js
const {
  stores: [target, bestBuy, lowes],
  cars: [ford, chevy, toyota],
} = companies

console.log(`${target} - ${bestBuy} - ${lowes}`)
// Target.com - BestBuy.com - Lowes.com
console.log(`${ford} - ${chevy} - ${toyota}`)
// Ford.com - Chevy.com - Toyota.com
```

If you only want specific items from the array, the same rules apply. Add a `,` in the locations you don't wish to pull

```js
const {
  stores: [target, , lowes],
} = companies

console.log(`${target} - ${lowes}`)
// Target.com - Lowes.com
console.log(bestBuy)
// ReferenceError: bestBuy is not defined
```

## Need help?

Like always, if you ran into any issues or questions feel free to reach out to me via [Twitter](https://twitter.com/teisenhower) and I'll be happy to help!

Thanks!
