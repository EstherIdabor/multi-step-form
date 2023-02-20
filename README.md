# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a Multi-step form that looks very much like a real-world application where you sign up and make subscriptions to online packages of a SaaS company.

### The challenge

Users are able to:

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [solution URL](https://github.com/EstherIdabor/multi-step-form)
- Live Site URL: [live site URL](https://multi-step-form-esther.netlify.app/)

## My process

This project is divided into threee sections; the markup or HTML, the styling(CSS), and the functionality(JavaScript).
The markup is quite straight-forward and from the design it is easy to visualze how to contanerized using section and/or div tag, the different related content and steps.

Firstly everything is put in a main tag, the sidebar doesn't change even as the steps change, so it is put alone in a div container seperated from the different steps, the steps are wrapped in a container also, so that some general styling can be applied without repetition such as padding and margin, this is because the the layout for the different steps is similar to an extent.
The different steps are put in different div for application of their separate style.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- vanilla JS

### What I learned

```js
dynamicContainer1.insertAdjacentHTML(
  "afterbegin",
  `<div class="flex">
  <h3 class="margin-top text-weight-700">${activeTabName}(${interval})</h3>
  <p class="margin-top month">${activeTabValue}</p>
 </div>`
);
```

### Continued development

### Useful resources

- [resource 1](https://developer.mozilla.org/en-US/)
- [resource 2](https://www.w3schools.com/)

## Author

- Blog - [Esther Idabor's blog](https://devmedic.hashnode.dev/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@Chukwuyem_ego](https://twitter.com/Chukwuyem_ego?t=LuQxqfKBn0VlD7mNTOztOQ&s=08)
