class Recipe {
  constructor(id, img, ingredients, inst, name, tags) {
    this.id = id;
    this.image = img;
    this.ingredients = ingredients;
    this.instructions = inst;
    this.name = name;
    this.tags = tags;
  }

  listIngredients() {
    this.ingredients.map(ingredient => {
      return ingredient.name;
    });
  }

  calculateRecipeCost() {
    this.ingredients.reduce((acc, cur) => {
  //    acc += amount times costInCents.....
    }, 0);
  }

  displayInstructions() {
    return this.instructions;
  }


}


export default Recipe;
