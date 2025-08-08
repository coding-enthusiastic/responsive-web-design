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
    14. `<cite> `- Citation. Used with `<blockquote>` or `<figure>`
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
+ `p:last-of-type` psuedo element takes only the last element of specified tag for styling.
+ `vetical-align` acts like items-center in flex.
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


# Project 8 - Quiz

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

+ `aspect-ratio: 3/2;` - allows to define the ratio between width and height.