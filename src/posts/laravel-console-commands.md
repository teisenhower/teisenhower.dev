---
title: 'Adding flare to your Laravel console commands'
longdate: 'June 3rd, 2024'
date: '2024-06-03'
keywords: 'gatsby, react, aws,'
---

## Adding flare to your Laravel console commands

What do I mean by "flare". Well.. Here are 2 examples showcasing what we will be working through.

### Add colors styles and even emojis to your outputs

![Screenshot 2024-06-06 at 5 08 45 PM](https://github.com/teisenhower/teisenhower.dev/assets/47988669/a1dbc46f-4963-4b16-9a7d-b62e9e665884)

### Adding colors and custom messages to progress bars

![progress-bar](https://github.com/teisenhower/teisenhower.dev/assets/47988669/74c0f8c4-fa18-469e-8e1e-4bf7b57e6114)

# Setup

Let's get you setup with a base Laravel application and start generating some commands!

```bash
laravel new console-commands-flair
```

# Output Colors

Now that we have our base application, let's start off by creating a command and explore the different styles we can apply to our line outputs.

```bash
php artisan make:command ColorFlair
```

If you've spent any time in the [Artisan Console](https://laravel.com/docs/11.x/artisan) section of the Laravel Docs, you may already be familiar with the basic output styles Laravel makes available to us. If not, those styles are; `line`, `info`, `comment`, `question`, `warn`, and `error`. And this is what they look like

![basic-console-outputs](https://github.com/teisenhower/teisenhower.dev/assets/47988669/d5d3fc9a-7966-482a-af6d-c012b9fd1655)

> You'll notice both `question` and `warn` will ultimately provide us the same styling

## Going beyond Laravel's default styles

These are fantastic for the vast majority of the commands you'll write but, that's not what we're here for. We want **Flare**. We want something that is going to jump off the terminal and impress whoever is using your awesome commands.

### Colors

Let's start off small and simply make our text color a shade of purple _(one of my favorite colors)_. This is done by wrapping our text inside essentially an HTML element (but we don't need a tag name) and using the `fg` attribute. So our purple output would be written like so;

```php
$this->line('<fg=magenta;>We have purple text!</>');
```

![purple-text-output](https://github.com/teisenhower/teisenhower.dev/assets/47988669/50fc7219-7921-46d0-919e-1397d1bad752)

So.. you may be asking, "Why `magenta` and not `purple`?". Great question! This is because there are only a handful of basic color options available to us. Those basic basic colors are;

```
black, red, green, yellow, blue, magenta, cyan, white, default, gray, bright-red, bright-green, bright-yellow, bright-blue, bright-magenta, bright-cyan, bright-white
```

If you try using a color not within this list, you'll be presented with a `'Invalid "orange" color;'` error. I'm a little salty that orange is not available as it is my favorite color. So what do I need to do in order to have an awesome orange message? Another great question. This is where we can flex our Flare muscles even more and use HEX codes in place of these basic colors.

Let's see an orange example

```php
$this->line('<fg=#F67000;>Finally.. we have orange! That\'s better!</>');
```

![finally-orange](https://github.com/teisenhower/teisenhower.dev/assets/47988669/023f9a78-2328-4811-9cf9-24bb7d136a9f)

What if we wanted to combine my two favorite colors, using one as a background color? Some of you probably could have guessed but this is achieved by using the `bg` attribute. Here's an example combining my two favorite colors

```php
$this->line('<fg=#8300FE;bg=#E67F0D;options=bold> What an awesome color combo! </>');
```

![color-combo](https://github.com/teisenhower/teisenhower.dev/assets/47988669/992c4156-552a-44ff-9e9d-e982989d6f5e)

Using just these 2 attributes you can come up with some pretty cool designs, even nesting elements within one another like so

```php
$this->line('<fg=#38a3a5;bg=#c7f9cc;> How cools is <fg=#80ed99;bg=#38a3a5;> this?! </></>');
```

![nested-color-combos](https://github.com/teisenhower/teisenhower.dev/assets/47988669/b01d7048-b51e-44d6-a168-252911bddfde)

> Note how I added extra spaces in order to provide some padding for our background colors!

### Font Styles

```
bold, underscore, blink, reverse, conceal
```

### Custom Colors

# Why add Flare?

Simply put.. because it's fun.

## Need help?

If you run into any issues or questions please feel free to reach out to me via [Twitter](https://twitter.com/teisenhower). I am more than happy to help.

Thanks!
