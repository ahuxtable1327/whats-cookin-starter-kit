import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
// import Ingredient from '..src/classes/Ingredient';

describe('Recipe', () => {
  let newRecipe;

  beforeEach(function() {
    newRecipe = new Recipe(595736, 'https://spoonacular.com/recipeImages/595736-556x370.jpg', [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }], [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        }], 'Loaded Chocolate Chip Pudding Cookie Cups', [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
              ]);
  });

  it('Should be an instance of a Recipe', () => {
    expect(newRecipe).to.be.instanceof(Recipe);
  });

  it('Should have an id', () => {
    expect(newRecipe.id).to.be.finite;
    expect(newRecipe.id).to.equal(595736);
  });

  it('Should store an image for the recipe', () => {
    expect(newRecipe.image).to.be.a('string');
    expect(newRecipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('Should store ingredients', () => {
    expect(newRecipe.ingredients).to.be.an('array');
    expect(newRecipe.ingredients[0].id).to.equal(20081);
    expect(newRecipe.ingredients.length).to.equal(3);
  });

  it('Should store it\'s own instructions', () => {
    expect(newRecipe.instructions).to.be.an('array');
    expect(newRecipe.instructions[1]).to.be.an('object');
  });

  it('Should have a name', () => {
    expect(newRecipe.name).to.be.a('string');
    expect(newRecipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('Should store it\'s own array of tags', () => {
    expect(newRecipe.tags).to.be.an('array');
    expect(newRecipe.tags[2]).to.equal('snack');
  });

  it.skip('Should determine the names of ingredients needed', () => {
    expect(newRecipe.listIngredients()).to.equal(['wheat flour, bicarbonate of soda, eggs']);
  });

  it.skip('Should calculate the cost of all it\'s ingredients', () => {
    expect(newRecipe.calculateRecipeCost()).to.equal(9.76);
  });

  it('Should return its directions/prep instructions', () => {
    expect(newRecipe.displayInstructions()).to.equal(newRecipe.instructions);
  });

});
