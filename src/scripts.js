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
const pageTitle = document.getElementById('pageTitle');


const currentRecipePage = document.getElementById('currentRecipe');



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
// searchRecipeForm.addEventListener('click', displaySearchedRecipes);
// addToMPBtn.addEventListener('click', addRecipeToMealPlan);
viewAllBtn.addEventListener('click', displayAllRecipes);
randomRecArea.addEventListener('click', displayClickedRecipe);


//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function loadRandomInfo(recipeData) {
  console.log(repository)
  randomRecArea.innerHTML = '';
  const randomIndex1 = recipeData[getRandomIndex(recipeData)];
  const randomIndex2 = recipeData[getRandomIndex(recipeData)];
  randomRecArea.innerHTML =
  `
   <section class='random-recipes' id='randomRecipes'>
    <div class='popular-recipes-one' id='${randomIndex1.id}'>
      <h3>${randomIndex1.name}</h3>
      <img src="${randomIndex1.image}" alt="${randomIndex1.name}">
    </div>
    <div class='popular-recipes-one' id='${randomIndex2.id}'>
      <h3>${randomIndex2.name}</h3>
      <img src="${randomIndex2.image}" alt="${randomIndex2.name}">
    </div>
   </section>
  `
}
  // on window load, still need a random user to be logged in

function displayClickedRecipe(event) {
  lowerMain.innerHTML = ''
  const currentRecipeID = event.target.closest('div').id
  console.log(currentRecipeID)
  const currentRecipe = recipeData.find(recipe => {
    recipe.id === currentRecipeID;
      return recipe;
  });
  console.log(currentRecipe)

      // currentRecipePage.innerHTML = `
      //   <h2>${currentRecipe.name}</h2>
      //   <button type='add-meal-plan-btn' name='mealPlanBtn' id='addToMPBtn'>Add To Meal Plan</button>
      //   <aside class='image-and-desc' id='imageDesc'>
      //     <img src='${recipe.image}' alt='${recipe.name}'>
      //     <p>summary of recipe overlays image</p>
      //   </aside>
      //   <aside class='ingredients-prep' id='prepInstArea'>
      //     <div class='ingredient-info' id='ingInfo'>
      //       <p>${recipe.ingredients}</p>
      //     </div>
      //     <div class='prep-instructions' id='prepInst'>
      //       <p>${recipe.instructions}</p>
      //     </div>
      //   </aside>
      // `;
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

// function displaySearchedRecipes(searchTerm) {
//   const searchResults = recipeData.filter(recipe => {
//     recipe.includes(searchTerm);
//   });
//   console.log(searchResults);
// }

function displayAllRecipes() {
  //input: array of recipe objects
  // output innerHTML recipe name and image
  lowerMain.classList.add('hidden');
  allRecipeArea.classList.remove('hidden');
  pageTitle.innerText = `All Recipes`
  let allRecipes = recipeData.forEach(recipe => {
    allRecipeArea.innerHTML +=
    `
    <section class='all-recipes' id='allRecipes'>
      <div class='popular-recipes-one' id='${recipe.id}'>
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="chocolate-chip-cookies">
      </div>
    </section>
    `
  });
  return allRecipes;
}
