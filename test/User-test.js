import { expect } from 'chai';
import User from '../src/classes/User'
import RecipeRepository from '../src/classes/RecipeRepository';
import testRecipes from './testRecipeData'
import testUsers from './testUserData'



describe('User', () => {
  let user, repository;

  beforeEach(() => {
    user = new User(testUsers[0]);
    repository = new RecipeRepository(testRecipes);

  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should be able to favorite a recipe', () => {
    user.addFavorite(repository.recipes[0]);
    user.addFavorite(repository.recipes[1]);

    expect(user.favoriteRecipes.length).to.equal(2);
    expect(user.favoriteRecipes).to.deep.equal([repository.recipes[0], repository.recipes[1]]);
  });

  it('should be able to unfavorite a recipe', () => {
    user.addFavorite(repository.recipes[0]);
    user.addFavorite(repository.recipes[1]);
    user.removeFromFavorites(repository.recipes[1]);

    expect(user.favoriteRecipes.length).to.equal(1);
    expect(user.favoriteRecipes).to.deep.equal([repository.recipes[0]]);
  });

  it('should be able to add to a meal plan', () => {
    user.addToMealPlan(repository.recipes[2]);
    expect(user.mealPlans.length).to.equal(1);
    expect(user.mealPlans).to.deep.equal([repository.recipes[2]]);
  });

  it('should be able to filter favorited recipes by tags', () => {
    user.addFavorite(repository.recipes[0]);
    user.addFavorite(repository.recipes[1]);
    user.filterFavoritesByTag('dinner');
    expect(user.filteredFavorites).to.deep.equal([repository.recipes[1]]);
  });

  it('should be able to filter favorited recipes by name', () => {
    user.addFavorite(repository.recipes[0]);
    user.addFavorite(repository.recipes[1]);
    user.filterFavoritesByName('cookie');
    expect(user.filteredFavorites).to.deep.equal([repository.recipes[0]]);
  })
})
