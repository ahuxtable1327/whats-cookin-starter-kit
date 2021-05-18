import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'

describe('RecipeRepository', () => {
  let repository, recipe;

  beforeEach(() => {
    let puddingCup = {"id": 595736,
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
        }],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack"]};
      recipe = new Recipe(puddingCup);
      repository = new RecipeRepository(recipe);
  });

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository', () => {
    expect(repository).to.be.an.instanceof(RecipeRepository);
  });

  it('should be able to take recipes', () => {
    expect(repository.recipes).to.equal(recipe);
  });

  it('should return a filtered list based on recipe tags', () => {
    let recipeList = repository.filterByTag('starter');
    expect(recipeList.length).to.equal(1);
  });

  it.skip('should return a filtered list based on recipe name', () => {
    let recipeList = recipe.filterByName('pork chops');
    expect(recipeList.length).to.equal(0);
  });

  it.skip('should return a filtered list based on ingredients', () => {
    let recipeList = recipe.filterByIngredient('wheat flour');
    expect(recipeList.length).to.equal(1);
  });
})
