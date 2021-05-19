import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
import testRecipes from './testRecipeData'

describe('RecipeRepository', () => {
  let repository, recipes

  beforeEach(() => {
      repository = new RecipeRepository(testRecipes);
  });

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository', () => {
    expect(repository).to.be.an.instanceof(RecipeRepository);
  });

  it('should be able to take in a recipe', () => {
    expect(repository.recipes).to.equal(recipe);
  });

  it('should return a filtered list based on recipe tags', () => {
    let recipeList = recipe.filterByTag('starter');
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
