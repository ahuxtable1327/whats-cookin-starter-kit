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
const instructionsArea = document.getElementById('instructions');
const currentRecipePage = document.getElementById('currentRecipe');

const searchValue = document.getElementById('searchValue');

const main = document.getElementById('main');

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
randomRecArea.addEventListener('click', displayClickedRecipe)
viewAllBtn.addEventListener('click', displayAllRecipes);


// allRecipeArea.addEventListener('click', displayClickedRecipe);


//global variables
let result;

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function loadRandomInfo(recipeData) {
  randomRecArea.innerHTML = '';
  const randomIndex1 = recipeData[getRandomIndex(recipeData)];
  const randomIndex2 = recipeData[getRandomIndex(recipeData)];
  randomRecArea.innerHTML +=
  `
   <section class='recipe random-recipes' id='randomRecipes'>
    <div class='recipe popular' id='${randomIndex1.id}'>
      <h3>${randomIndex1.name}</h3>
      <img src="${randomIndex1.image}" alt="${randomIndex1.name}">
    </div>
    <div class='recipe popular' id='${randomIndex2.id}'>
      <h3>${randomIndex2.name}</h3>
      <img src="${randomIndex2.image}" alt="${randomIndex2.name}">
    </div>
   </section>
  `
}
  // on window load, still need a random user to be logged in

function displayClickedRecipe(event) {
  toggleHidden(lowerMain);
  toggleHidden(singleRecipeArea);
  toggleHidden(instructionsArea);
  if
  (!allRecipeArea.classList.contains('hidden')) {
    toggleHidden(allRecipeArea);
  }

  let recipeToView = event.target.closest('.recipe');
  let matchedData = recipeData.find(recipe => {
    return recipe.id === parseInt(recipeToView.id);
  });
  // console.log(matchedData);
  result = new Recipe(matchedData);

  singleRecipeArea.innerHTML = '';
  singleRecipeArea.innerHTML +=
  `
    <section class='recipe single-recipe-view' id='singleRecipe'>
      <div class='recipe popular' id='${matchedData.id}'>
        <header>
          <h2>${matchedData.name}</h2>
        </header>
        <img src="${matchedData.image}">
      </div>
    </section>
     <h2>Instructions</h2>
  `
  displayInstructions(result)
  return matchedData;
}


function displayInstructions(result) {
  let instToDisplay = result.returnInstructions();
  instructionsArea.innerHTML = '';
  instToDisplay.forEach(inst => {
    instructionsArea.innerHTML +=
    `
    <p>${inst.instruction}</p>
    `
  });
}

// separate instructions in HTML
// recipedata.map ( for each let recipe instructions = recipe.instructions
// recipeInstruction.forEach --> return number and instruction)


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
        <div class='recipe recipe-listing' id=recipeListing1>
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
      <div class='recipe recipe-listing' id=recipeListing1>
        <img src='${recipe.image}' alt='${recipe.name}'>
        <p>${recipe.name}</p>
      </div>
  `
});
}

function displayAllRecipes() {
  if (!singleRecipeArea.classList.contains('hidden')) {
    toggleHidden(singleRecipeArea);
  }
  if (!instructionsArea.classList.contains('hidden')) {
    toggleHidden(instructionsArea);
  }

  toggleHidden(lowerMain)

  pageTitle.innerText = `All Recipes`
  allRecipeArea.classList.remove('hidden');

  let allRecipes = recipeData.forEach(recipe => {
    allRecipeArea.innerHTML +=
    `
    <section class='all-recipes' id='${recipe.id}'>
      <div class='popular-recipes-one' id='${recipe.id}'>
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="chocolate-chip-cookies">
      </div>
    </section>
    `
  });

  return allRecipes;
}


function navigateToHome() {
  if (!allRecipeArea.classList.contains('hidden')) {
    toggleHidden(allRecipeArea);
    enableBtn(viewAllBtn);
  }
  if (!singleRecipeArea.classList.contains('hidden')) {
    toggleHidden(singleRecipeArea);
  }
  if (!instructionsArea.classList.contains('hidden')) {
    toggleHidden(instructionsArea);
  }
  if (lowerMain.classList.toggle('hidden')) {
    toggleHidden(lowerMain);
  }
  if (!pageTitle.classList.contains('hidden')) {
    toggleHidden(pageTitle);
  }
  loadRandomInfo(recipeData);
}




function toggleHidden(pageArea) {
  pageArea.classList.toggle('hidden');
}

function disableBtn(buttonName) {
  buttonName.disabled = true;
}

function enableBtn(buttonName) {
  buttonName.disabled = false;
}
