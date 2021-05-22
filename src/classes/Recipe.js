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
    return this.ingredientNames.forEach(ing => {
      return ing;
    });
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

  returnInstructions() {
    let instToReturn = []
    let result = this.instructions.forEach(inst => {
      instToReturn.push(inst);
    });
    return instToReturn
  }

}


export default Recipe;
