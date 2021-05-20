import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
import testRecipes from './testRecipeData'
import testIngredients from './testIngredientData'

describe('RecipeRepository', () => {
  let repository

  beforeEach(() => {
      repository = new RecipeRepository(testRecipes, testIngredients);
  });

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository', () => {
    expect(repository).to.be.an.instanceof(RecipeRepository);
  });

  it('should be able to take in a recipe', () => {
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

  it('should return a filtered list based on ingredients', () => {
    repository.filterByIngredient('wheat flour');
    expect(repository.ingredients).to.deep.equal(testIngredients);
    expect(repository.recipeList.length).to.equal(2);
  });
})
