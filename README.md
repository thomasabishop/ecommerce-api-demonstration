# Eschmann frontend e-commerce demonstrations

This project exists to demonstrate how to create a filterable product listing on the front end using Javascript. 

## Composition
It uses Webpack to create a development environment but it is intended that the source files are interoperable with standard frontend technologies: HTML, CSS, JS. It includes Bootstrap 4, both the JavaScript modules and styles, as this is the frameworkyou intend to use within Umbraco. It includes jQuery as a dependency, but this is only for the external Bootstrap modules you may like to use. The JavaScript I have written does not use jQuery. 

All JavaScript in the ```src/` directory is written in ES5.

Explanatory comments are included throughout along with JSDocs documentation for functions etc.

## Running the project 
git clone ..
npm install
npm start

For this project we do not need a production build since the project only exists for the purposes of demonstration, however I have included a build dir (/dist), just for ensuring browser compatibility when writing the custom Javascript. If you want to generate a production build, just issue `npm run build` from the terminal.

In order to view the output we only need a development server. This runs when you issue `npm start`. It:
* serves the Webpack bundle from memory
* provides source mapping so that you can examine the runtime code using the browser's developer tools
* provides hot-reloading, so that changes to the JS and CSS will render on save 

## Spoof products API 



