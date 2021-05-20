<<<<<<< HEAD
import {ingredientsData} from '../data/ingredients';
import Ingredient from '../classes/Ingredient';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    // this.image = recipe.image;
    // this.ingredients = recipe.ingredients;
    // this.instructions = recipe.instructions;
    // this.name = recipe.name;
    // this.tags = recipe.tags;
  }

  // listIngredients() {
  //   let list = this.ingredients.map(ingredient => {
  //     return ingredient.name;
  //   });
  //   return list;
  // }
  //
  // calculateRecipeCost() {
  //   let total = this.ingredients.reduce((total, curValue) => {
  //     return total += curValue.quantity.amount * curValue.costInCents;
  //   }, 0);
  // }
  //
  // displayInstructions() {
  //   return this.instructions;
  // }
=======
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientNames = [];
  }

  listIngredients(testIngredientData) {
    const names = this.ingredients.map(ingredient => {
      const matchedIds = testIngredientData.filter(ing => {
        ing.id === ingredient.id;
      });
      const list = matchedIds.map(ing => {
        this.ingredientNames.push({name: ing.name, price: ing.estimatedCostInCents})
      });
    });
    return this.ingredientNames;
  }

  calculateRecipeCost(testIngredientData) {
    const total = this.ingredients.reduce((acc, curIng) => {
      let matched = testIngredientData.find(ingredient =>
        ingredient.id === curIng.id);
        acc += curIng.quantity.amount * matched.estimatedCostInCents;
        return acc;
    }, 0);
    return total / 100;
  }

  displayInstructions() {
    return this.instructions;
  }
>>>>>>> main

}


export default Recipe;
