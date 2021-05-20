import { expect } from 'chai';
import User from '../src/classes/User'
import RecipeRepository from '../src/classes/RecipeRepository';
import testRecipes from './testRecipeData'
import testUsers from './testUserData'



describe('User', () => {
  let user, repository;

  beforeEach(() => {
    repository = new Repository(testRecipes);
    user = new User();
  })

  it.skip('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.skip('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it.skip('should be able to favorite a recipe', () => {
    expect(user.favoriteRecipes.length).to.equal(2);
    expect(user.favoriteRecipes).to.deep.equal([repository.recipes[0], repository.recipes[1]]);
  });

  it.skip('should be able to unfavorite a recipe', () => {
    expect(user.favoriteRecipes.length).to.equal(1);
    expect(user.favoriteRecipes).to.deep.equal([repository.recipes[0]]);
  });

  it.skip('should be able to add to a meal plan', () => {
    expect(user.mealPlans.length).to.equal(1);
    expect(user.mealPlans).to.deep.equal([repository.recipes[1]]);
  });

  it.skip('should be able to filter favorited recipes by tags', () => {
    user.filterFavoritesByTag('dinner');
    expect(user.filteredFavorites).to.deep.equal([repository.recipes[1]]);
  });

  it.skip('should be able to filter favorited recipes by name', () => {
    user.filterFavoritesByName('cookie');
    expect(user.filteredFavorites).to.deep.equal([repository.recipes[0]]);
  })
})
