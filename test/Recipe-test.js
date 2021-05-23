import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/recipes';
import ingredientsData from '../src/data/ingredients';
import testRecipeData from '../src/data/testRecipeData';
import testIngredientData from '../src/data/testIngredientData';

describe('Recipe', () => {

  let newRecipe, newIngredients;

  beforeEach(() => {
    newRecipe = new Recipe(testRecipeData);
  });

  it('Should be an instance of a Recipe', () => {
    expect(newRecipe).to.be.instanceof(Recipe);
  });

  it('should have an id', () => {
    expect(newRecipe.id).to.be.finite;
    expect(newRecipe.id).to.equal(595736);
  });

  it('Should store an image for the recipe', () => {
    expect(newRecipe.image).to.equal(newRecipe.image);
  });

  it('Should store ingredients', () => {
    expect(newRecipe.ingredients).to.be.an('array');
    expect(newRecipe.ingredients[0].id).to.equal(20081);
    expect(newRecipe.ingredients.length).to.equal(6);
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
    expect(newRecipe.listIngredients(testIngredientData)).to.equal(newRecipe.ingredientNames);
  });

  it('Should calculate the cost of all it\'s ingredients', () => {
    expect(newRecipe.calculateRecipeCost(testIngredientData)).to.equal(36.865);
  });

  it('Should return its directions/prep instructions', () => {
    expect(newRecipe.displayInstructions()).to.equal(newRecipe.instructions);
  });

});
