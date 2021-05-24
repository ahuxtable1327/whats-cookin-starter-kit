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
        Object.keys(this.ingredientNames).push('amount');
        Object.keys(this.ingredientNames).push('unit');
        return ing.id === ingredient.id;
      });
      nameMatch.amount = ingredient.quantity.amount;
      nameMatch.unit = ingredient.quantity.unit;
      this.ingredientNames.push(nameMatch);
      return nameMatch;
    });
    this.calculateRecipeCost();
    return this.ingredientNames;
  }

  calculateRecipeCost() {
    const recTotal = this.ingredientNames.reduce((acc, cur) => {
      this.ingredientNames.forEach(ing => {
        let dollars = (ing.estimatedCostInCents/100);
        return ing.estimatedCostInDollars = dollars;
      })
      return acc += (cur.estimatedCostInDollars * cur.amount);
    }, 0);
    return this.recipeTotal = Math.floor(recTotal).toFixed(2);
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
