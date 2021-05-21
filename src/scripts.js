import './styles.css';
// import apiCalls from './apiCalls';
import Recipe from '../src/classes/Recipe';
// import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import testRecipeData from '../src/data/testRecipeData';
import testIngredientData from '../src/data/testIngredientData';
// const data = testRecipeData;
import recipeData from '../src/data/recipes';
// const data = recipeData;
// import ingredientsData from '../src/data/ingredients';
// import usersData from '../src/data/users';


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
// searchRecipeForm.addEventListener('click', displaySearchedRecipes);
// addToMPBtn.addEventListener('click', addRecipeToMealPlan);
// viewAllBtn.addEventListener('click', displayAllRecipes);
randomRecArea.addEventListener('click', showRecipeInfo);


//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function loadRandomInfo(data) {
  console.log('Working');
  console.log(testRecipeData);
  console.log(recipeData);
  randomRecArea.innerHTML = '';
  const randomIndex1 = getRandomIndex(recipeData);
  const randomIndex2 = getRandomIndex(recipeData);
  randomRecArea.innerHTML =
  `
   <section class='random-recipes' id='randomRecipes'>
    <div class='popular-recipes-one' id='popularRecipesOne'>
      <h3>${recipeData[randomIndex1].name}</h3>
      <img src="${recipeData[randomIndex1].image}" alt="chocolate-chip-cookies">
    </div>
    <div class='popular-recipes-one' id='popularRecipesOne'>
      <h3>${recipeData[randomIndex2].name}</h3>
      <img src="${recipeData[randomIndex2].image}" alt="chocolate-chip-cookies">
    </div>
   </section>
  `
  // on window load, still need a random user to be logged in

function displayClickedRecipe(event) {
  // event.closest.innerHTML.....
}

// function displaySearchedRecipes(searchTerm) {
//   const searchResults = recipeData.filter(recipe => {
//     recipe.includes(searchTerm);
//   });
//   console.log(searchResults);
// }
