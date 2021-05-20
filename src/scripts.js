import './styles.css';
import apiCalls from './apiCalls';

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
// window.addEventListener('load', logInRandomUser);
// favoritesBtn.addEventListener('click', showFavRecipes);
breakfastBtn.addEventListener('click', showBreakfastRecipes);
lunchBtn.addEventListener('click', showLunchRecipes);
dinnerBtn.addEventListener('click', showDinnerRecipes);
dessertBtn.addEventListener('click', showDessertRecipes);
// searchRecipeForm.addEventListener('click', showAllRecipes);
addToMPBtn.addEventListener('click', addRecipeToMealPlan);
