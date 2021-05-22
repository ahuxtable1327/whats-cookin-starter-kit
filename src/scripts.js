import './styles.css';
// import apiCalls from './apiCalls';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';

import testRecipeData from '../src/data/testRecipeData';
import testIngredientData from '../src/data/testIngredientData';

import recipeData from '../src/data/recipes';

import ingredientsData from '../src/data/ingredients';
// import usersData from '../src/data/users';

const repository = new RecipeRepository(recipeData, ingredientsData);
//DOM variables
  //buttons and form
const favoritesBtn = document.getElementById('favBtn');
const breakfastBtn = document.getElementById('breakfast');
const lunchBtn = document.getElementById('lunch');
const dinnerBtn = document.getElementById('dinner');
const sideBtn = document.getElementById('side');
const searchRecipeForm = document.getElementById('search');
const addToMPBtn = document.getElementById('addToMPBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const homeBtn = document.getElementById('homeBtn');

  //page areas/sections
//(grabbed section containing the divs)
const randomRecArea = document.getElementById('randomRecipes');
const searchArea = document.getElementById('searchArea');
const recipeByCat = document.getElementById('recipeByCat');
const imageDesc = document.getElementById('imageDesc');
const prepInstArea = document.getElementById('prepInstArea');
const favoritesArea = document.getElementById('favoritesArea');
// const mealPlan = document.getElementById('mealPlan');
const lowerMain = document.getElementById('lowerMain');
const allRecipeArea = document.getElementById('allRecipes');
const singleRecipeArea = document.getElementById('singleRecipe');
const pageTitle = document.getElementById('pageTitle');

const currentRecipePage = document.getElementById('currentRecipe');

const searchValue = document.getElementById('searchValue');



// Event Listeners
window.addEventListener('load', function() {
  loadRandomInfo(recipeData);
});
// favoritesBtn.addEventListener('click', showFavRecipes);
breakfastBtn.addEventListener('click', function () {
  displayCategoryRecipes(event)
});
lunchBtn.addEventListener('click', function () {
  displayCategoryRecipes(event)
});
dinnerBtn.addEventListener('click', function () {
  displayCategoryRecipes(event)
});
sideBtn.addEventListener('click', function () {
  displayCategoryRecipes(event)
});
searchRecipeForm.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    displaySearchedRecipes(event)
  }
});
// addToMPBtn.addEventListener('click', addRecipeToMealPlan);
homeBtn.addEventListener('click', navigateToHome);
viewAllBtn.addEventListener('click', displayAllRecipes);

randomRecArea.addEventListener('click', displayClickedPopular);
// randomRecArea.addEventListener('click', displayClickedRecipe);


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
    <div class='popular' id='${randomIndex1.id}'>
      <h3>${randomIndex1.name}</h3>
      <img src="${randomIndex1.image}" alt="${randomIndex1.name}">
    </div>
    <div class='popular' id='${randomIndex2.id}'>
      <h3>${randomIndex2.name}</h3>
      <img src="${randomIndex2.image}" alt="${randomIndex2.name}">
    </div>
   </section>
  `
}
  // on window load, still need a random user to be logged in

function displayClickedPopular(event) {
  lowerMain.classList.toggle('hidden');
  singleRecipeArea.classList.toggle('hidden');

  let recipeToView = event.target.closest('.popular');

  let matchedData = recipeData.find(recipe => {
    return recipe.id === parseInt(recipeToView.id);
  });

  singleRecipeArea.innerHTML = '';

  singleRecipeArea.innerHTML +=
  `
    <section class='single-recipe-view' id='singleRecipe'>
      <div class='popular' id='${matchedData.id}'>
        <header>
          <h2>${matchedData.name}</h2>
        </header>
        <img src="${matchedData.image}">
        <h1>Ingredients</h1>
      </div>
      <section>
        <h1>Instructions</h1>
        <p>${matchedData.instructions}</p>
      </section>
    </section>
  `
  return matchedData;
}

  function displayCategoryRecipes(event) {
    lowerMain.classList.add('hidden');
    allRecipeArea.classList.add('hidden');
    recipeByCat.classList.remove('hidden');
    const category = event.target.id;
    repository.filterByTag(category);
    const tagRecipes = repository.recipeList
    pageTitle.innerText = `${category} recipes`
    recipeByCat.innerHTML = ''
    let catRecipes = tagRecipes.forEach(recipe => {
      recipeByCat.innerHTML += `
        <div class='recipe-listing' id=recipeListing1>
          <img src='${recipe.image}' alt='${recipe.name}'>
          <p>${recipe.name}</p>
        </div>
    `
  });
}

function displaySearchedRecipes(event) {
  event.preventDefault();
  lowerMain.classList.add('hidden');
  allRecipeArea.classList.add('hidden');
  recipeByCat.classList.remove('hidden');
  const searchTerm = searchValue.value.trim();
  repository.filterByName(searchTerm);
  repository.filterByIngredient(searchTerm);
  const recipeList = repository.recipeList
  recipeByCat.innerHTML = ''
  pageTitle.innerText = `Recipes that include ${searchTerm}`
  let filteredRecipes = recipeList.forEach(recipe => {
    recipeByCat.innerHTML += `
      <div class='recipe-listing' id=recipeListing1>
        <img src='${recipe.image}' alt='${recipe.name}'>
        <p>${recipe.name}</p>
      </div>
  `
});
}

function displayAllRecipes() {
  disableBtn(viewAllBtn);
  lowerMain.classList.add('hidden');
  allRecipeArea.classList.remove('hidden');
  pageTitle.innerText = `All Recipes`
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

function navigateToHome() {
    allRecipeArea.classList.toggle('hidden');
    lowerMain.classList.toggle('hidden');
    searchValue.value = ''
    loadRandomInfo(recipeData);
}

function disableBtn(buttonName) {
  buttonName.disabled = true;
}

function enableBtn(buttonName) {
  buttonName.disabled = false;
}
