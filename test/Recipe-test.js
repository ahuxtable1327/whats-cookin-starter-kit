import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';


describe('Recipe', () => {
  let newRecipe;

  beforeEach(function() {

    const testRecipe = {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
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
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
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
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    };
    newRecipe = new Recipe(testRecipe);
  });

  it('Should be an instance of a Recipe', () => {
    expect(newRecipe).to.be.instanceof(Recipe);
  });

  it('Should have an id', () => {
    expect(newRecipe.id).to.be.finite;
    expect(newRecipe.id).to.equal(595736);
  });

  it('Should store an image for the recipe', () => {
    expect(newRecipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('Should store ingredients', () => {
    expect(newRecipe.ingredients).to.be.an('array');
    expect(newRecipe.ingredients[0].id).to.equal(20081);
    expect(newRecipe.ingredients.length).to.equal(11);
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

  it('Should determine the names of ingredients needed', () => {
    expect(newRecipe.listIngredients()).to.equal(['wheat flour, bicarbonate of soda, eggs']);
  });

  it.skip('Should calculate the cost of all it\'s ingredients', () => {
    expect(newRecipe.calculateRecipeCost()).to.equal(9.76);
  });

  it('Should return its directions/prep instructions', () => {
    expect(newRecipe.displayInstructions()).to.equal(newRecipe.instructions);
  });

});
