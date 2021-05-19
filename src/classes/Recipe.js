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
    const list = this.ingredients.map(ing => {
      return ing.name;
    });
    return list;
  }

  calculateRecipeCost() {
    this.ingredients.reduce((acc, cur) => {
     acc += cur.amount * //data ref.cost
    }, 0);
  }

  displayInstructions() {
    return this.instructions;
  }


}


export default Recipe;
