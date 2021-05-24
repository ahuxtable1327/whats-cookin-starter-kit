import './styles.css';
// import getData from './apiCalls';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import User from '../src/classes/User';

import testRecipeData from '../src/data/testRecipeData';
import testIngredientData from '../src/data/testIngredientData';

import recipeData from '../src/data/recipes';
import ingredientsData from '../src/data/ingredients';
import userData from '../src/data/users';

const repository = new RecipeRepository(recipeData, ingredientsData);
const randomUser = userData[getRandomIndex(userData)];
const user = new User(randomUser);
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
// const deleteBtn = document.getElementById('delete');

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
const ingredientsArea = document.getElementById('ingredients');
const currentRecipePage = document.getElementById('currentRecipe');
const searchValue = document.getElementById('searchValue');
const searchOptions = document.getElementById('searchOptions')
const error = document.getElementById('error')

// const main = document.getElementById('main');

let allData = [];

// Event Listeners
window.addEventListener('load', function() {
  // getData()
  //   .then(response => allData = response)
  //   .then( () => {
  //     console.log('allData', allData)
  //     loadRandomInfo(allData[2].recipeData);
  //   });
  loadRandomInfo(recipeData);
});

// let allData = [];
let result;
// const repository = new RecipeRepository(recipeData, ingredientsData);
// const randomUser = userData[getRandomIndex(userData)];
// const user = new User(randomUser);

favoritesBtn.addEventListener('click', displayFavorites);
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
searchRecipeForm.addEventListener('keypress', function() {
  if (event.keyCode === 13) {
    displaySearchedRecipes(event)
  }
});
// addToMPBtn.addEventListener('click', addRecipeToMealPlan);
homeBtn.addEventListener('click', navigateToHome);
randomRecArea.addEventListener('click', displayClickedRecipe)
viewAllBtn.addEventListener('click', displayAllRecipes);
allRecipeArea.addEventListener('click', displayClickedRecipe);
recipeByCat.addEventListener('click', displayClickedRecipe);

singleRecipeArea.addEventListener('click', function() {
  addRecipeToFavorites(event)
});

favoritesArea.addEventListener('click', function() {
  deleteRecipeFromFavorites(event);
});

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function loadRandomInfo(recipeData) {
  console.log(user);
  pageTitle.innerHTML = 'Popular Recipes';
  const randomIndex1 = recipeData[getRandomIndex(recipeData)];
  const randomIndex2 = recipeData[getRandomIndex(recipeData)];
  if (randomIndex1 === randomIndex2) {
    randomIndex2 = (randomIndex2 += 1);
  }
  randomRecArea.innerHTML = '';
  randomRecArea.innerHTML +=
  `
    <div class='recipe popular' id='${randomIndex1.id}'>
      <h3>${randomIndex1.name}</h3>
      <img src="${randomIndex1.image}" alt="${randomIndex1.name}">
    </div>
    <div class='recipe popular' id='${randomIndex2.id}'>
      <h3>${randomIndex2.name}</h3>
      <img src="${randomIndex2.image}" alt="${randomIndex2.name}">
    </div>
  `
}
  // on window load, still need a random user to be logged in

function displayClickedRecipe(event) {
  hidePageArea(allRecipeArea);
  hidePageArea(lowerMain);
  hidePageArea(recipeByCat);
  hidePageArea(randomRecArea);
  hidePageArea(favoritesArea);
  showPageArea(singleRecipeArea);
  showPageArea(instructionsArea);
  showPageArea(ingredientsArea);
  hidePageArea(pageTitle);
  let recipeToView = event.target.closest('.recipe');
  let matchedData = recipeData.find(recipe => {
    return recipe.id === parseInt(recipeToView.id);
  });
  result = new Recipe(matchedData);
  displayIngredients(result);
  displayInstructions(result);
  singleRecipeArea.innerHTML = '';
  singleRecipeArea.innerHTML +=
  `
      <div class='current-recipe' id='${matchedData.id}'>
        <button class='add-to-fav-btn' id='addToFavBtn'>Add to favorites</button>
        <header>
          <h2>${matchedData.name}</h2>
        </header>
        <img src="${matchedData.image}">
      </div>
      <h3>Estimated Total Recipe Cost: $${result.calculateRecipeCost()}</h3>
      <h2>Instructions</h2>
  `
  return matchedData;
}

function displayInstructions(result) {
  let instToDisplay = result.returnInstructions();
  instructionsArea.innerHTML = '';
  instToDisplay.forEach(inst => {
    instructionsArea.innerHTML +=
    `
    <div class='instructions' id='${inst.id}'>
      <p>${inst.instruction}</p>
    </div>
    `
  });
}

function displayIngredients(result) {
  result.listIngredients(ingredientsData);
  ingredientsArea.innerHTML = '';
  result.ingredientNames.forEach(ingName => {
    ingredientsArea.innerHTML +=
    `
      <div class='ingredients' id='${ingName.id}'>
        <p>${ingName.name}, ${ingName.amount} ${ingName.unit} - est cost: $${ingName.estimatedCostInCents/100}</p>
      </div>
    `
  });
}

function addRecipeToFavorites(event) {
  event.target.closest('btn');
  const firstChild = singleRecipeArea.firstElementChild;
  const recipeToAdd = repository.recipes.find(recipe => recipe.id === parseInt(firstChild.id));
  user.addFavorite(recipeToAdd);
  // console.log(user.favoriteRecipes);
};

function deleteRecipeFromFavorites(event) {
  if (event.target.closest('img')) {
    displayClickedRecipe(event);
  } else {
    event.target.closest('btn');
    let recipeToDelete = event.target.id;
    let found = user.favoriteRecipes.find(rec => {
      return rec.id === parseInt(recipeToDelete);
    });
    user.removeFromFavorites(found);
    displayFavorites();
  }
}

function displayFavorites() {
  hidePageArea(ingredientsArea);
  hidePageArea(instructionsArea)
  hidePageArea(lowerMain);
  hidePageArea(allRecipeArea);
  hidePageArea(singleRecipeArea);
  hidePageArea(randomRecArea);
  hidePageArea(recipeByCat);
  showPageArea(favoritesArea);
  showPageArea(pageTitle);
  favoritesArea.innerHTML = ''
  const favoriteRecipes = user.favoriteRecipes;
  pageTitle.innerText = `${user.name}'s Favorite Recipes`
  let filteredRecipes = favoriteRecipes.forEach(recipe => {
    favoritesArea.innerHTML += `
      <div class='recipe recipe-listing' id='${recipe.id}'>
        <p>${recipe.name}</p>
        <button class'btn delete-btn' id='${recipe.id}'>Delete Recipe</button>
        <img src='${recipe.image}' alt='${recipe.name}'>
      </div>
  `
  });
};
/// use id to find the recipe and pass the recipe into the user.addFavorite
function displayCategoryRecipes(event) {
  hidePageArea(instructionsArea);
  hidePageArea(ingredientsArea);
  hidePageArea(allRecipeArea);
  hidePageArea(singleRecipeArea);
  hidePageArea(lowerMain);
  showPageArea(recipeByCat);
  const category = event.target.id;
  repository.filterByTag(category);
  displayRecipes();
  pageTitle.innerHTML = `${category}`
}

function displaySearchedRecipes(event) {
  event.preventDefault();
  recipeByCat.innerHTML = ''
  if (searchOptions.value === 'empty' || searchValue.value === '') {
    error.innerText = 'These fields cannot be empty';
  } else if (searchOptions.value === 'ingredients') {
    const searchTerm = searchValue.value.trim();
    repository.filterByIngredient(searchTerm);
    displayRecipes();
  } else {
    const searchTerm = searchValue.value.trim();
    repository.filterByName(searchTerm);
    displayRecipes();
  }
}

function displayRecipes() {
  hidePageArea(ingredientsArea);
  hidePageArea(instructionsArea)
  hidePageArea(lowerMain);
  hidePageArea(allRecipeArea);
  hidePageArea(singleRecipeArea);
  showPageArea(recipeByCat);
  showPageArea(pageTitle);
  recipeByCat.innerHTML = ''
  const searchTerm = searchValue.value.trim();
  const recipeList = repository.recipeList
  pageTitle.innerText = `Recipes that include ${searchTerm}`
  let filteredRecipes = recipeList.forEach(recipe => {
    recipeByCat.innerHTML += `
      <div class='recipe recipe-listing' id='${recipe.id}'>
        <img src='${recipe.image}' alt='${recipe.name}'>
        <p>${recipe.name}</p>
      </div>
  `
  });
}

function displayAllRecipes() {
  hidePageArea(randomRecArea);
  hidePageArea(singleRecipeArea);
  hidePageArea(instructionsArea);
  hidePageArea(ingredientsArea);
  hidePageArea(lowerMain);
  hidePageArea(favoritesArea);
  showPageArea(pageTitle);
  pageTitle.innerText = 'All Recipes'
  allRecipeArea.classList.remove('hidden');
  let allRecipes = recipeData.forEach(recipe => {
    allRecipeArea.innerHTML +=
    `
      <div class='recipe popular-recipes-one' id='${recipe.id}'>
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="chocolate-chip-cookies">
      </div>
    `
  });
  return allRecipes;
}

function navigateToHome() {
  searchValue.value = '';
  searchOptions.value = 'empty';
  error.innerText = '';
  hidePageArea(allRecipeArea);
  hidePageArea(singleRecipeArea);
  hidePageArea(instructionsArea);
  hidePageArea(ingredientsArea);
  hidePageArea(recipeByCat);
  showPageArea(lowerMain);
  showPageArea(randomRecArea);
  showPageArea(pageTitle);
  loadRandomInfo(recipeData);
}

function hidePageArea(pageArea) {
  pageArea.classList.add('hidden');
}

function showPageArea(pageArea) {
  pageArea.classList.remove('hidden');
}
