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
        return ing.id === ingredient.id;
      });
      const list = matchedIds.map(ing => {
        this.ingredientNames.push(ing.name);
      });
    });
    return this.ingredientNames;
  }

  calculateRecipeCost(testIngredientData) {
    let recipeCost = 0;
    const result = this.ingredients.forEach(ingredient => {
      testIngredientData.filter()
    });
    return recipeCost;
  }

  displayInstructions() {
    return this.instructions;
  }

}


export default Recipe;
