<a id='top'></a>

# Introduction



# Table of Contents
- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Instructions for Use](#instructions-for-use)
- [Version Notes](#version-notes)
      - [Please note that this is raw commit data](#please-note-that-this-is-raw-commit-data)
- [Tech Framework](#tech-framework)
    - [This app uses:](#this-app-uses)
    - [We built this app with:](#we-built-this-app-with)
    - [This app is hosted at:](#this-app-is-hosted-at)
- [Future Plans](#future-plans)
- [Contribute](#contribute)
- [Special Thanks](#special-thanks)
- [About the Developers](#about-the-developers)
    - [Christian Mosley](#christian-mosley)
- [Appendices](#appendices)
  - [Appendix A: Project Pre-Planning](#appendix-a-project-pre-planning)
    - [User Expectations](#user-expectations)
      - [As a user:](#as-a-user)
    - [User Stories](#user-stories)
    - [Databases](#databases)
    - [Wireframes & Mockups](#wireframes--mockups)
  - [Appendix C: Product Screenshots & Images](#appendix-c-product-screenshots--images)

[Back to Top](#top)
<a id='instructions'></a>

# Instructions for Use

The user first arrives at a [splash page](#appendix-c-picture-001-splash-page-not-logged-in) when navigating to the root directory of the URL and is prompted to log in or sign up for an account.  Once signed-in, the user is redirected to a [search results page](#appendix-c-picture-002-search-results-page-logged-in) that shows a central list of all uploaded snippets.  This page also features a search bar up top; as the user types a string into the search field, the page will [dynamically update the displayed snippets](#appendix-c-picture-003-dynamic-search-rendering-logged-in) to show ones which contain the search string somewhere in their content.

The nav bar in the header has a link to create a new snippet; when clicked the user is taken to a page with a [create snippet form](#appendix-c-picture-004-create-snippet-page-logged-in).  The user types information about their snippet.  Two code blocks are provided where the user can type code and see a dynamically-rendered preview with syntax highlighting.

[Back to Top](#top)
<a id='version-notes'></a>

# Version Notes

The **1.0.0** version of this app is currently uploaded.  In cases where I update the README without any updates to the website itself I do not update the version number or use branches for my work.  Each version number will lack a commit number until the next version is uploaded.  The current commit number is always added retroactively.  In general, for version number format X.Y.Z:

* X: increases in this number represent a complete overhaul of some section of the website, source code, or UI
* Y: increases in this number represent a major functional change/aesthetic change or addition to the app
* Z: increases in this number represent changes that are relatively minor but still warrant a new commit

Version XXXXXXX is the first version with the full range of intended functions successfully implemented.  Version 1.0.0 is the first to be both full functional and styled with optimized coding.

#### Please note that this is raw commit data





# Tech Framework

### This app uses:
* HTML5 and CSS
* JavaScript ES6
* [Node.js](https://nodejs.org/en/) v 15.9.0 & [Express](https://expressjs.com/) v 4.17.1
* [Tailwind CSS](https://tailwindcss.com/) v 2.1.1
* [dot env](https://www.npmjs.com/package/dotenv)
* [React Router](https://www.npmjs.com/package/react-router)
* [CORS](https://www.npmjs.com/package/cors)
* [PostCSS](https://www.npmjs.com/package/postcss) & [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) v 8.5.1

### We built this app with:
* [VSCode](https://code.visualstudio.com/) version 1.55.2
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Google Chrome](https://www.google.com/chrome/) version 90.0.4430.85 (Official Build) (arm64)
* Zsh version with [Oh My Zsh](https://ohmyz.sh/)
* [GitHub](https://github.com/) (online, not desktop)

### This app is hosted at:
* [GitHub Repo](https://github.com/ScriptStud-io/ScriptStud.io)
* [Heroku Hosted Site](https://script-studio.herokuapp.com/)

[Back to Top](#top)
<a id='future-plans'></a>

# Future Plans


[Back to Top](#top)
<a id='contribute'></a>

# Contribute

At this point in time the developers are not looking for outside collaborators on ScriptStud.io.  That may change in the future as this project grows and scale issues require more skillsets and man-hours to build and maintain the platform.  If you believe in the mission of this product the best thing you can do is utilize the product, contribute code snippets, and help build our knowledgebase.

[Back to Top](#top)
<a id='special-thanks'></a>

# Special Thanks


* The color palatte was generated with with [Coolors.co](https://coolors.co/) and [HTML Color Codes](https://htmlcolorcodes.com/) for template generation.  We used [Color Safe](http://colorsafe.co/) and [WebAIM](https://webaim.org/resources/contrastchecker/) to test our color choices for sufficient contrast to make the website accessible.
* Formatting this `README.md` file was easy with the help of the [Markdown Live Preview](https://markdownlivepreview.com/) tool and GitHub Guide's [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) page.
* [Whimsical](https://whimsical.com/wireframes) was used to generate the wireframe images and ERDs seen throughout this `README.md` file.
* The code for this website was written with frequent reference to a number of 3rd party resources:
  * [MDN Web Docs](https://developer.mozilla.org/en-US/)
  * [Mongoose Docs](https://mongoosejs.com/docs/guides.html)
  * [React Router Docs](https://reactrouter.com/core/guides/philosophy)
  * [Stack Overflow](https://stackoverflow.com/)

[Back to Top](#top)
<a id='appendices'></a>

# About the Developers

### Christian Mosley

Christian is a web developer from Fort Worth, TX. With a passion for business, sports and technology, Christian decided on a career change during COVID when he found the time to cultivate his passion for web development.  Learn more about Christian at these links:

* [LinkedIn](https://www.linkedin.com/in/christian-mosley)
* [GitHub](www.GitHub.com/cmosley)

# Appendices

[Back to Top](#top)
<a id='appendix-a-assignment'></a>

## Appendix A: Project Pre-Planning

**Important!**  Some information in this section may appear to contradict information elsewhere in this `README.md` file.  It should be noted that this information represents how the project was conceived in the initial planning stage.  Contradictory elsewhere in this file likely represents current and more accurate information.

### User Expectations

#### As a user:

* I want 

### User Stories

1. 

2. 

### Databases



**Entity Relationship Diagram (ERD)**


### Wireframes & Mockups



[Back to Top](#top)
<a id='appendix-c-pictures'></a>

## Appendix C: Product Screenshots & Images




