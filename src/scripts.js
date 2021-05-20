import './styles.css';
import apiCalls from './apiCalls';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients';
import { usersData } from '../src/data/users';


//DOM variables
  //buttons and form
const favoritesBtn = document.getElementById('favBtn');
const breakfastBtn = document.getElementById('breakfastBtn');
const lunchBtn = document.getElementById('lunchBtn');
const dinnerBtn = document.getElementById('dinnerBtn');
const dessertBtn = document.getElementById('dessertBtn');
const searchRecipeForm = document.getElementById('search');
const addToMPBtn = document.getElementById('addToMPBtn');
const viewAllBtn = document.getElementById('viewAll');

  //page areas/sections
//(grabbed section containing the divs)
const randomRecArea = document.getElementById('randomRecipes');
const recipeByCat = document.getElementById('recipeByCat');
const imageDesc = document.getElementById('imageDesc');
const prepInstArea = document.getElementById('prepInstArea');
const favoritesArea = document.getElementById('favoritesArea');
const mealPlan = document.getElementById('mealPlan');


// Event Listeners
window.addEventListener('load', loadRandomInfo);
// favoritesBtn.addEventListener('click', showFavRecipes);
// breakfastBtn.addEventListener('click', showBreakfastRecipes);
// lunchBtn.addEventListener('click', showLunchRecipes);
// dinnerBtn.addEventListener('click', showDinnerRecipes);
// dessertBtn.addEventListener('click', showDessertRecipes);
// searchRecipeForm.addEventListener('click', showSearchedRecipes);
// addToMPBtn.addEventListener('click', addRecipeToMealPlan);
viewAllBtn.addEventListener('click', showAllRecipes);


//functions
function loadRandomInfo(recipeData) {
  console.log('Working');
  // randomRecArea.innerHTML = '';
  // recipeData.forEach(recipe => {
  //   randomRecArea.innerHTML =
  //   `<section class='random-recipes' id='randomRecipes'>
  //     <div class='popular-recipes-one' id='${recipe.id}'>
  //       <img src='${recipe.image}'>
  //     </div>
  //   </section>`
  })
  // on window load, a random user should be logged in and some random recipes should load at bottom for 'Popular Recipes section';
}


// function showAllRecipes(recipeData) {
//
// }
