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

  listIngredients(data) {
    let theseIngs = this.ingredients.forEach(ingredient => {
      let nameMatch = data.find(ing => {
        return ing.id === ingredient.id;
      });
      this.ingredientNames.push(nameMatch);
      return nameMatch;
    });
    console.log(this.ingredientNames);
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

  returnInstructions() {
    let instToReturn = []
    let result = this.instructions.forEach(inst => {
      instToReturn.push(inst);
    });
    return instToReturn
  }

}


export default Recipe;
