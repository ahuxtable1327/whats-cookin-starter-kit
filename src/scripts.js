import './styles.css';
// import apiCalls from './apiCalls';
import Recipe from '../src/classes/Recipe';
// import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
// import testRecipeData from '../src/data/testRecipeData';
// import testIngredientData from '../src/data/testIngredientData';
// const data = testRecipeData;
import recipeData from '../src/data/recipes';
// const data = recipeData;
import ingredientsData from '../src/data/ingredients';
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
const lowerMain = document.getElementById('lowerMain');
const allRecipeArea = document.getElementById('allRecipes');



// Event Listeners
window.addEventListener('load', loadRandomInfo);
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

function loadRandomInfo() {
  // on window load, still need a random user to be logged in
  const randomIndex1 = getRandomIndex(recipeData);
  const randomIndex2 = getRandomIndex(recipeData);
  randomRecArea.innerHTML = '';
  randomRecArea.innerHTML +=
  `
   <section class='random-recipes' id='randomRecipes'>
    <div class='popular' id='${recipeData[randomIndex1].id}'>
      <h3>${recipeData[randomIndex1].name}</h3>
      <img src="${recipeData[randomIndex1].image}">
    </div>
    <div class='popular' id='${recipeData[randomIndex2].id}'>
      <h3>${recipeData[randomIndex2].name}</h3>
      <img src="${recipeData[randomIndex2].image}">
    </div>
   </section>
  `
}

function displayClickedRecipe(event) {
  // console.log(recipeData)
  let recipeToView = event.target.closest('.popular');
  const matchedData = recipeData.find(recipe => {
    return recipe.id === parseInt(recipeToView.id);
  });
  console.log(recipeToView.id);
  console.log(matchedData);
  return matchedData;
}
// allRecipeArea.classList.toggle('hidden');

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
    <section class='all-recipes' id='allRecipes' ${recipe.id}>
      <div class='popular-recipes-one' id='popularRecipesOne'>
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="chocolate-chip-cookies">
      </div>
    </section>
    `
  });
  return allRecipes;
}
