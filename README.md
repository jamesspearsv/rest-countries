# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

<!-- TOC -->
* [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  * [Table of contents](#table-of-contents)
  * [Overview](#overview)
    * [The challenge](#the-challenge)
    * [Screenshot](#screenshot)
    * [Links](#links)
  * [My process](#my-process)
    * [Built with](#built-with)
    * [What I learned](#what-i-learned)
    * [Continued development](#continued-development)
    * [Useful resources](#useful-resources)
  * [Author](#author)
<!-- TOC -->

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./public/Screenshot%202024-12-31%20at%2017.06.39.png)

> App home page in light mode

![](./public/Screenshot%202024-12-31%20at%2017.07.01.png)

> Details page in dark mode

![](./public/Screenshot%202024-12-31%20at%2017.07.22.png)

> App home page optimized for display on mobile and tablets


### Links

- Solution URL: https://github.com/jamesspearsv/rest-countries
- Live Site URL: https://countries.jspears.me/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/) - Type syntax for JavaScript
- [Vite](https://vite.dev/) - Frontend build tool
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - Routing library for ReactJS
- [FontAwesome](https://fontawesome.com/) - Icon and font library

### What I learned

This was my first project using TypeScript. I was happy to find out that TS is relatively easy to pick up and 
integrate with your existing JS and React knowledge. During this project I used typings throughout the app and 
components. I was particularly happy with the custom type I wrote to represent country information returned by Rest 
Countries.

```ts
export type Country = {
  borders: string[];
  capital: string[];
  cca3: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: { [key: string]: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string; official: string } };
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};
```

I also used type definitions throughout the project to define component props and control state variables.

```ts
type CountryFlagProps = {
  imageSrc: string;
};
```
Country flag component with an image source prop that must be a string

```ts
  const [countries, setCountries] = useState<Country[] | null>(null);
```

State variables defined as either null or an array of countries using the above Country type

### Continued development

This project could be optimized by separating the UI elements of the app pages in to independent components. For 
example the details page elements could be divided into components including:

- BorderCountryLink
- CountryDerails
- CountryFlag

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Very helpful resource to provide a general introduction 
  to TS
- [Types vs Interfaces in TypeScript](https://blog.logrocket.com/types-vs-interfaces-typescript/) - Blog post that 
  provides a overview of the differences between types and interfaces in TS

## Author

- Website - [James Spears](https://jspears.me)
- Frontend Mentor - [@jamesspearsv](https://www.frontendmentor.io/profile/jamesspearsv)
