# Notes of All Projects

## Project 1 - Cat Photo App

+ focus on **Basic HTML**

+ `<fieldset>` and `<legend>`

---

## Project 2 - Cafe Menu

+ focus on **Basic CSS**

+ `<article>` = Self contained piece of content (blog post, etc).

+ `a:visited {}` this pseudo-class can give more control on a tag. Others are `a:link, a:active, a:focus`

+ Use semantic HTML tags for better SEO and accessibility. Its also good for readability. Some of the tags:
    1. `<header>`
    2. `<nav>`
    3. `<main>`
    4. `<section>`
    5. `<article>`
    6. `<aside>`
    7. `<figure>`
    8. `<figcaption>`
    9. `<address>`
    10. `<time>`
    11. `<mark>`- Highlights the text
    12. `<summary>` & `<details>` - Expandable content
    13. `<blockquote>` - Quoted text
    14. `<cite>`- Citation. Used with `<blockquote>` or `<figure>`
    15. `<code>`

+ Use only one `<main>` and `<h1>` for better SEO.

---

## Project 3 - Colored Markers

+ focus on **CSS Colors**

+ rgb, rgba - `rgba(255, 127, 0, 0.5)`

+ hsl, hsla - `hsla(240, 100%, 100%, 0.8)`

+ hex, hexa - `#003BFAFF`

+ `background: linear-gradient(#55680D, #71F53E, #116C31);`

---

## Project 4 - Registration Form

+ focus on **HTML Forms**

+ `pattern="[a-z0-5]{8,}` in `<input type="password">`

+ min and max in `<input type="number">`

+ rows and cols in `<textarea>`

+ target="_blank" in `<a>` tag, opens the link in new tab.

+ `<select>` and `<option>`

+ `margin: auto` acts like justify-center in flex.

+ `p:last-of-type` pseudo element takes only the last element of specified tag for styling.

+ `vertical-align` acts like items-center in flex.

+ `input[type:"submit"]` selects only the input with the specified attribute.

---

## Project 5 - Rothko Painting

+ focus on **CSS Box Model**

+ `filter: blur(10px)` to blur the content

+ `transform: rotate(0.5deg)` to rotate the content

+ `box-shadow: 0 0 3px 3px #8f0401` to give shadow to the box model.

---

## Project 6 - Photo Gallery

+ focus on **CSS Flexbox**

+ `text-transform: uppercase`

+ `box-sizing: border-box` and `content-box`. border-box for content the items inside the box.

+ `.item::after` and `::before` to style something before and after the item.

---

## Project 7 - Nutrition Label

+ focus on **Typography**

+ `rem` means root em, which is mainly used for fonts. this takes root font-size as main value, and adjust the content. eg:

```bash
html { font-size: 20px } 
textOne { font-size: 0.50rem } // around 10px
```

+ `p:not(...)`, not excludes the given value item from other same items.
+ `text-indent: 2px` intents the text.

---

## Project 8 - Quiz

+ focus on **Accessibility**

+ `@media (prefers-reduced-motion: no-preference) {}` - used for accessibility setting. `no-preference` prevents problems that causing transition, animation issues.

+ `role=""` attribute creates better accessibility. It specifies the content role. eg:

```bash

<a type="submit" role="button">Submit</a>

# instead of 

<button type="submit">Submit</button>

```

+ Instead of using media query for responsiveness, use `width: max(5vw, 500px)`. It can also work with `min` and `clamp`.

+ `clamp(min, preferred, max)` is better. eg:

```bash
h1 {
  font-size: clamp(2rem, 2.5vw, 3.5rem);
}

p {
  font-size: clamp(1rem, 2.5vw, 2.5rem);
}

```

+ `aspect-ratio: 3/2;` - allows to define the ratio between width and height

---

## Project 9 - Balance Sheet

+ focus on **CSS Pseudo Selectors**

+ `aria-hidden="true"` makes it hidden for screen readers

+ `<caption>` defines a table caption. It must be inserted after `<table>` tag

+ `clip` lets you specify a rectangle to clip an absolutely positioned element. Its deprecated and replaced by `clip-path`. It wont work if `overflow: visible` exists.

+ Syntax: `clip: rect(0px, 50px, 100px, 0px)`

+ `calc(value + value2)` lets you assign dynamic value. eg: `width: calc(80vw - 35px)`

+ `div[class="new"]` only takes divs with the given class. But `div.new` includes div with new class.

+ `:first-of-type, :last-of-type, :nth-of-type()` lets you specify a element from group of same element on the order basis. eg: `h2:nth-of-type(3) {}`

---

## Project 10 - Cat Painting

+ focus on **Intermediate level CSS**

+ `border-radius: 40px 30px 50px 30px` it takes values as top-left, top-right, bottom-left and bottom-right respectively.

+ It can also be called like this: `border-radius-top-left:`

---

## Project 11 - Piano

+ focus on **Responsive Web Design**

+ `float` - specifies how an element should float

---

## Project 12 - City Skyline

+ focus on **CSS Variables**

+ `:root {}` is the highest level element in html and css. If you declare anything inside it, you can call it anywhere in css.

+ `var()` is use to declare a variable in css. Normally its declared in `:root()` selector to access it everywhere. If you declare a variable inside a chid, you wont be able to access it outside of it.

+ `--name: value` is the syntax for variable declaration

### Gradients

+ CSS has three types of gradients:
    1. Linear Gradients
    2. Radial Gradients
    3. Conic Gradients

+ Gradient are treated as image. So, you cant give gradients inside background-color property. You can use either `background` or `background-image` property.

+ `background: linear-gradient(direction, color1, color2, ...)` is the syntax for gradient. In direction, you can declare degree values or top, bottom, etc values.

+ Radial gradient is defined by its center.

+ `background-image: radial-gradient(shape size at position, color1, color2)` is syntax. By default, shape is ellipse, size is farthest-corner and position is center.

+ Conic gradient is with color transitions rotated around its center point.

+ `background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);`

```bash
# Linear Gradients
.a {
  background: linear-gradient(to bottom right, red, yellow);
}

.b {
  background: repeating-linear-gradient(90deg, white, red 20%, green, 30%, yellow 40%);
}

# Radial Gradients

.c {
  background: radial-gradient(circle closest-side at 60% 50%, red, yellow);
}

.d {
  background: repeating-radial-gradient(red, yellow);
}

# Conic Gradients

.e {
  background: conic-gradient(red, green, yellow);
}

.f {
  background-image: repeating-conic-gradient(red 10%, yellow 20%);
  border-radius: 50%;
}

```

---

## Project 13 - Magazine

+ focus on **CSS Grid**

+ `loading` attribute works on `img` tag. It has two values. eager or lazy. If you select the lazy value, the image will only load when user scroll to it. If its not on the screen, it wont be loaded.

+ `<blockquote>` tag specifies a section for the content. Browsers usually indent the content in it.

+ `minmax()` attribute takes two values. min and max values. You can add this in width selector for responsiveness.

+ `row-gap` and `column-gap` are sub categories of `gap` property.

+ The default rem value of html is 16px. You can set to another value in html selector.

+ `<bdi>` is a useful tag to remove the text direction of a word from the sentence. eg: Adding arabic word inside a english sentence.

+ `grid-column: 1 / -1;` this will set the item to span till the last column.

+ `repeat(5, 1fr)` attribute takes 2 values. How many and length. It is used for grid set columns and rows.

+ `grid-auto-flow: column` property controls how auto placed items get inserted in grid.

+ `grid-auto-columns: 1fr` property sets a size for the columns in grid.

+ `place-items` property is the combined version of `align-items` and `justify-items`. It takes 2 values in the mentioned order.

+ `div:first-letter` pseudo class takes the first letter from the selected tag content for styling.

---

## Project 14 - Ferris Wheel

+ focus on **CSS Animation**

+ `@keyframes name {}` is the main property of animation. You can the specify animation type inside it call the name in wherever you want.

+ These are the important animation properties:

```bash
animation-name: circle; # takes the keyframe name
animation-duration: 5s; # sets duration of animation
animation-delay: 2s; # sets delay before starting animation
animation-iteration-count: 2; # sets the iteration count. "Infinite" is mostly used one.
animation-direction: alternate; # sets the direction of animation.
animation-timing-function: ease-in-out; # sets the speeding of animation.
animation-fill-mode: forwards; # specifies whether the animation should kept before and after.
animation-play-state: paused; # specifies whether the animation is running or paused;
```

+ `animation: circle 5s linear 2s infinite alternate` is a shorthand of above things. It follows this order: name, duration, timing-function, delay, iteration-count, direction.

---

## Project 15 - Penguins

+ focus on **CSS Transforms**

+ `transform: skew(x axis, y axis)` is an transform function, which can skew element (like making a font italic) by angles.

+ `cursor` property specifies the mouse cursor behavior. "not allowed" is one of the attributes, which shows 'X' arrow.

+ `font` property is a short hand of multiple font related properties.

+ `transform-origin` property allows you to change the position of the transformed elements. It should be used with `transform` property.
