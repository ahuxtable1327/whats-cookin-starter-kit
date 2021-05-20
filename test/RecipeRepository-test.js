import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
import testRecipes from './testRecipeData'

describe('RecipeRepository', () => {
  let repository

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
    // expect(repository.recipes[0]).to.be
    expect(repository.recipes).to.deep.equal(testRecipes);
  });

  it('should return a filtered list based on recipe tags', () => {
    repository.filterByTag('starter');
    expect(repository.recipeList.length).to.deep.equal(1);
  });

  it('should return a filtered list based on recipe name', () => {
    repository.filterByName('pork chops');
    expect(repository.recipeList.length).to.equal(1);
  });

  it.skip('should return a filtered list based on ingredients', () => {
    let recipeList = recipe.filterByIngredient('wheat flour');
    expect(repository.recipeList.length).to.equal(1);
  });
})
