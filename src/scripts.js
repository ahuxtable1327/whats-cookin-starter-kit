import './styles.css';
import getData from './apiCalls';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import User from '../src/classes/User';

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
const randomRecArea = document.getElementById('randomRecipes');
const searchArea = document.getElementById('searchArea');
const recipeByCat = document.getElementById('recipeByCat');
const imageDesc = document.getElementById('imageDesc');
const prepInstArea = document.getElementById('prepInstArea');
const favoritesArea = document.getElementById('favoritesArea');
const greetTitle = document.getElementById('greetTitle');

// const mealPlan = document.getElementById('mealPlan');
const lowerMain = document.getElementById('lowerMain');
const allRecipeArea = document.getElementById('allRecipes');
const singleRecipeArea = document.getElementById('singleRecipe');
const pageTitle = document.getElementById('pageTitle');
const instructionsArea = document.getElementById('instructions');
const ingredientsArea = document.getElementById('ingredients');
const searchValue = document.getElementById('searchValue');
const searchOptions = document.getElementById('searchOptions')
const error = document.getElementById('error')

// const main = document.getElementById('main');
let userData, ingredientsData, recipeData, result;
let allData = [];
let user, randomUser, repository;

// Event Listeners
window.addEventListener('load', function() {
  getData()
    .then(response => {
        userData = response[0].usersData;
        ingredientsData = response[1].ingredientsData;
        recipeData = response[2].recipeData;
        console.log(userData, ingredientsData, recipeData);
        randomUser = userData[getRandomIndex(userData)];
        user = new User(randomUser);
        repository = new RecipeRepository(recipeData, ingredientsData);
        loadRandomInfo(recipeData);
        greeting();
    });
});

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
  pageTitle.innerHTML = 'Popular Recipes';
  const randomIndex1 = recipeData[getRandomIndex(recipeData)];
  const randomIndex2 = recipeData[getRandomIndex(recipeData)];
  if (randomIndex1 === randomIndex2) {
    randomIndex2 = (randomIndex2 += 1);
  }
  randomRecArea.innerHTML = '';
  randomRecArea.innerHTML +=
  `
    <div class='recipe recipe-popular' id='${randomIndex1.id}'>
      <h4 class='pop-recipe'>${randomIndex1.name}</h4>
      <img class='pop-recipe-img' src="${randomIndex1.image}" alt="${randomIndex1.name}">
    </div>
    <div class='recipe recipe-popular' id='${randomIndex2.id}'>
      <h4 class='pop-recipe'>${randomIndex2.name}</h4>
      <img class='pop-recipe-img' src="${randomIndex2.image}" alt="${randomIndex2.name}">
    </div>
  `
}

function greeting() {
  greetTitle.innerHTML = '';
  greetTitle.innerHTML += `<h1 class='greet-title' id='greetTitle' >Hi, ${randomUser.name}! What's Cookin?</h1>`
}

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
        <header class='current-rec-head'>
          <h2>${matchedData.name}</h2>
        </header>
        <button class='add-to-fav-btn' id='addToFavBtn'>➕ Add to favorites</button>
        <img class='single-recipe' src="${matchedData.image}" alt="${matchedData.name}">
      </div>
      <h3>Estimated Total Recipe Cost: $${result.calculateRecipeCost()}</h3>
  `
  return matchedData;
}

function displayInstructions(result) {
  let instToDisplay = result.returnInstructions();
  instructionsArea.innerHTML = '<h2>Instructions</h2>';
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
  ingredientsArea.innerHTML = `<h2 class='ingred'>Ingredients & Cost</h2>`;
  result.ingredientNames.forEach(ingName => {
    ingredientsArea.innerHTML +=
    `
      <div class='ingredients' id='${ingName.id}'>
        <p>${ingName.name}, ${ingName.amount} ${ingName.unit} - $${ingName.estimatedCostInCents/100}</p>
      </div>
    `
  });
}

function addRecipeToFavorites(event) {
  event.target.closest('btn');
  const firstChild = singleRecipeArea.firstElementChild;
  const recipeToAdd = repository.recipes.find(recipe => recipe.id === parseInt(firstChild.id));
  user.addFavorite(recipeToAdd);
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
        <h4 class>${recipe.name}</h4>
        <button class='btn delete-btn' id='${recipe.id}'>🗑 Delete Recipe</button>
        <img class='recipe-img' src='${recipe.image}' alt='${recipe.name}'>
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
  hidePageArea(randomRecArea);
  hidePageArea(favoritesArea);
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
  hidePageArea(favoritesArea);
  showPageArea(recipeByCat);
  showPageArea(pageTitle);
  recipeByCat.innerHTML = ''
  const searchTerm = searchValue.value.trim();
  const recipeList = repository.recipeList
  pageTitle.innerText = `Recipes that include ${searchTerm}`
  let filteredRecipes = recipeList.forEach(recipe => {
    recipeByCat.innerHTML += `
      <div class='recipe recipe-listing' id='${recipe.id}'>
        <h4>${recipe.name}</h4>
        <img class='recipe-img' src='${recipe.image}' alt='${recipe.name}'>
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
  hidePageArea(recipeByCat);
  showPageArea(pageTitle);
  pageTitle.innerText = 'All Recipes'
  allRecipeArea.classList.remove('hidden');
  let allRecipes = recipeData.forEach(recipe => {
    allRecipeArea.innerHTML +=
    `
      <div class="recipe recipe-listing" id="${recipe.id}">
        <h4>${recipe.name}</h4>
        <img class='recipe-img' src="${recipe.image}" alt="${recipe.name}">
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
