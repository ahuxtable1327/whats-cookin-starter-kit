import {ingredientsData} from '../data/ingredients';
import Ingredient from '../classes/Ingredient.js';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  listIngredients() {
    let list = this.ingredients.map(ingredient => {
      return ingredient.name;
    });
    return list;
  }

  calculateRecipeCost() {
    let total = this.ingredients.reduce((total, curValue) => {
      return total += curValue.quantity.amount * curValue.costInCents;
    }, 0);
  }

  displayInstructions() {
    return this.instructions;
  }


}


export default Recipe;
