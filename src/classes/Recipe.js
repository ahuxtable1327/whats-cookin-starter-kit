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
    const ingredientNames = this.ingredients.map(ingredient => {
      const matchedIds = testIngredientData.filter(ing => {
        return ing.id === ingredient.id;
      });
      const list = matchedIds.map(ing => {
        this.ingredientNames.push(ing.name);
      });
    });
    return this.ingredientNames;
  }

  calculateRecipeCost() {
    let total = this.ingredients.reduce((total, curValue) => {
      return total += curValue.quantity.amount * curValue.costInCents;
    }, 0);
  }

  displayInstructions() {
    console.log(this.ingredients);
    console.log(testIngredientData);
    return this.instructions;
  }


}


export default Recipe;
