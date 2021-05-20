import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import testRecipes from './testRecipeData'


describe('Recipe', () => {
  let newRecipe;

  beforeEach(() => {
      newRecipe = new Recipe(testRecipes[0]);
  });

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it.skip('Should be an instance of a Recipe', () => {
    expect(newRecipe).to.be.instanceof(Recipe);
  });

  it.skip('Should have an id', () => {
    expect(newRecipe.id).to.be.finite;
    expect(newRecipe.id).to.equal(595736);
  });

  it.skip('Should store an image for the recipe', () => {
    expect(newRecipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it.skip('Should store ingredients', () => {
    expect(newRecipe.ingredients).to.be.an('array');
    expect(newRecipe.ingredients[0].id).to.equal(20081);
    expect(newRecipe.ingredients.length).to.equal(11);
  });

  it.skip('Should store it\'s own instructions', () => {
    expect(newRecipe.instructions).to.be.an('array');
    expect(newRecipe.instructions[1]).to.be.an('object');
  });

  it.skip('Should have a name', () => {
    expect(newRecipe.name).to.be.a('string');
    expect(newRecipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it.skip('Should store it\'s own array of tags', () => {
    expect(newRecipe.tags).to.be.an('array');
    expect(newRecipe.tags[2]).to.equal('snack');
  });

  it.skip('Should determine the names of ingredients needed', () => {
    expect(newRecipe.listIngredients()).to.equal(['wheat flour, bicarbonate of soda, eggs']);
  });

  it.skip('Should calculate the cost of all it\'s ingredients', () => {
    expect(newRecipe.calculateRecipeCost()).to.equal(9.76);
  });

  it.skip('Should return its directions/prep instructions', () => {
    expect(newRecipe.displayInstructions()).to.equal(newRecipe.instructions);
  });

});
