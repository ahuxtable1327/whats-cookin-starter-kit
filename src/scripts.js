import './styles.css';
import apiCalls from './apiCalls';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients';
import { usersData } from '../src/data/users';




console.log('Hello world');
//DOM variables
  //buttons and form
const favoritesBtn = document.getElementByID('favBtn');
const breakfastBtn = document.getElementByID('breakfastBtn');
const lunchBtn = document.getElementByID('lunchBtn');
const dinnerBtn = document.getElementByID('dinnerBtn');
const dessertBtn = document.getElementByID('dessertBtn');
const searchRecipeForm = document.getElementByID('search');
const addToMPBtn = document.getElementByID('addToMPBtn');

  //page areas/sections
//(grabbed section containing the divs)
const randomRecArea = document.getElementByID('randomRecipes');
const recipeByCat = document.getElementByID('recipeByCat');
const imageDesc = document.getElementByID('imageDesc');
const prepInstArea = document.getElementByID('prepInstArea');
const favoritesArea = document.getElementByID('favoritesArea');
const mealPlan = document.getElementByID('mealPlan');



// Event Listeners
// window.addEventListener('load', loadRandomUserRec);
// favoritesBtn.addEventListener('click', showFavRecipes);
breakfastBtn.addEventListener('click', showBreakfastRecipes);
lunchBtn.addEventListener('click', showLunchRecipes);
dinnerBtn.addEventListener('click', showDinnerRecipes);
dessertBtn.addEventListener('click', showDessertRecipes);
// searchRecipeForm.addEventListener('click', showAllRecipes);
addToMPBtn.addEventListener('click', addRecipeToMealPlan);


loadRandomUserRec() {

}
