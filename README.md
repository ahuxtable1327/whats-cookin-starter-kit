## Title: What's Cookin 

A Front-End Project by: [Ashton Huxtable](https://github.com/ahuxtable1327) & [Beth Meeker](https://github.com/Meekb)

## Index

1. [Overview](#overview)
2. [Functionality](#functionality)
3. [Technologies](#technologies)
4. [Contributors](#contributors)
5. [Resources](#resources)
6. [Instructions](#instructions)

## Overview
  What's Cookin is a recipe application designed to allow users to search and save recipes. 

## Instructions for cloning
  1. Clone this repo to your local machine
  2. cd into repo from the terminal
  3. type `npm install` to install the dependencies
  4. type `npm start` to start the host and view the page

## Functionality

   - Main page navigation
     - A random user is logged in when the page loads - and the application prominently greets the user by name
     - Buttons filter recipes by four specific categories - Breakfast, Lunch, Dinner, and Sides
     - View All Recipes button will navigate the user to view the full list of all recipes in the database
     - Search Bar allows the user to search the recipe database by recipe name, or by ingredient
     - Each time the main page loads, two random 'Popular Recipes' are loaded for the user 
   
   - Recipe View
    - Click a recipe to view ingredients and preperation details
    - Total estimated cost of the recipe is displyed under the recipe image
    - Ingredient amounts and estimated dollar cost
    - Instructions for preperation
   
   - Favorites View
    - A recipe is added to Favorites by clicking the Add To Favorites button displayed when viewing the recipe details
    - Favorites section is named by user name, creating a unique and personalized experience
   
  * Architecture 
    * Four class files - Ingredient, Recipe, User, and RecipeRepository
    * Four robust test files accompany each class file using Mocha & Chai Should / Expect
    * Network requests made using .fetch() to API endpoints 

  * Future Upgrades
    * Meal Plan view which allows the user to add and remove recipes from their weekly plan
    * 3rd party library for dynamic navigation bar

## Technologies
  1. HTML, CSS, and JavaScript
  2. Webpack
  3. Mocha, Chai
  4. ESLint
  5. GitHub
  6. gifcap (https://gifcap.dev/)

## Contributors
  Ashton Huxtable https://github.com/ahuxtable1327
  Beth Meeker https://github.com/Meekb
  Turing School of Software & Design https://github.com/turingschool-examples

## Resources
  1. [MDN Web Docs](https://developer.mozilla.org/en-US/)
  2. [Turing What's Cookin](https://frontend.turing.edu/projects/whats-cookin.html)
