# Notes of All Projects

## Project 1 - Cat Photo App

+ `<fieldset>` and `<legend>`

--- 


## Project 2 - Cafe Menu

+ `<article>` = Self contained piece of content (blog post, etc).

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

+ rgb, rgba - `rgba(255, 127, 0, 0.5)`
+ hsl, hsla - `hsla(240, 100%, 100%, 0.8)`
+ hex, hexa - `#003BFAFF`

+ `background: linear-gradient(#55680D, #71F53E, #116C31);`

---


## Project 4 - Registration Form

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

+ `filter: blur(10px)` to blur the content
+ `transform: rotate(0.5deg)` to rotate the content
+ `box-shadow: 0 0 3px 3px #8f0401` to give shadow to the box model.

---


## Project 6 - Photo Gallery

+ `text-transform: uppercase`
+ `box-sizing: border-box` and `content-box`. border-box for content the items inside the box.
+ `.item::after` and `::before` to style something before and after the item.

--- 


## Project 7 - Nutrition Label

+ `rem` means root em, which is mainly used for fonts. this takes root font-size as main value, and adjust the content. eg: 
```bash
html { font-size: 20px } 
textOne { font-size: 0.50rem } // around 10px
```

+ `p:not(...)`, not excludes the given value item from other same items.
+ `text-indent: 2px` intents the text.