import './styles.css';
// import apiCalls from './apiCalls';
import Recipe from '../src/classes/Recipe';
// import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import testRecipeData from '../src/data/testRecipeData';
import testIngredientData from '../src/data/testIngredientData';
import recipeData from '../src/data/recipes';
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
const viewAllBtn = document.getElementById('viewAllBtn');

  //page areas/sections
//(grabbed section containing the divs)
const randomRecArea = document.getElementById('randomRecipes');
const searchArea = document.getElementById('searchArea');
const recipeByCat = document.getElementById('recipeByCat');
const imageDesc = document.getElementById('imageDesc');
const prepInstArea = document.getElementById('prepInstArea');
const favoritesArea = document.getElementById('favoritesArea');
const mealPlan = document.getElementById('mealPlan');
const lowerMain = document.getElementById('lowerSection');
const allRecipeArea = document.getElementById('allRecipes');



// Event Listeners
window.addEventListener('load', function() {
  loadRandomInfo(recipeData);
});
// favoritesBtn.addEventListener('click', showFavRecipes);
// breakfastBtn.addEventListener('click', showBreakfastRecipes);
// lunchBtn.addEventListener('click', showLunchRecipes);
// dinnerBtn.addEventListener('click', showDinnerRecipes);
// dessertBtn.addEventListener('click', showDessertRecipes);
// searchRecipeForm.addEventListener('click', displaySearchedRecipes);
// addToMPBtn.addEventListener('click', addRecipeToMealPlan);
viewAllBtn.addEventListener('click', displayAllRecipes);
randomRecArea.addEventListener('click', displayClickedRecipe);


//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function loadRandomInfo(recipeData) {
  randomRecArea.innerHTML = '';
  const randomIndex1 = recipeData[getRandomIndex(recipeData)];
  const randomIndex2 = recipeData[getRandomIndex(recipeData)];
  randomRecArea.innerHTML =
  `
   <section class='random-recipes' id='randomRecipes'>
    <div class='popular-recipes-one' id='${randomIndex1.id}'>
      <h3>${randomIndex1.name}</h3>
      <img src="${randomIndex1.image}" alt="chocolate-chip-cookies">
    </div>
    <div class='popular-recipes-one' id='${randomIndex2.id}'>
      <h3>${randomIndex2.name}</h3>
      <img src="${randomIndex2.image}" alt="chocolate-chip-cookies">
    </div>
   </section>
  `
  console.log(randomIndex1)
}
  // on window load, still need a random user to be logged in

function displayClickedRecipe(event) {
  const currentRecipe = event.target.closest('div').id
  console.log(currentRecipe)
}

// function displayClickedRecipe(event) {
//   event.closest.innerHTML....
// }

// function displaySearchedRecipes(searchTerm) {
//   const searchResults = recipeData.filter(recipe => {
//     recipe.includes(searchTerm);
//   });
//   console.log(searchResults);
// }

function displayAllRecipes() {
  //input: array of recipe objects
  // output innerHTML recipe name and image
  lowerMain.classList.toggle('hidden');
  allRecipeArea.classList.toggle('hidden');
  let allRecipes = recipeData.forEach(recipe => {
    allRecipeArea.innerHTML +=
    `
    <section class='all-recipes' id='allRecipes'>
      <div class='popular-recipes-one' id='popularRecipesOne'>
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="chocolate-chip-cookies">
      </div>
    </section>
    `
  });
  console.log(allRecipes);
  return allRecipes;
}
