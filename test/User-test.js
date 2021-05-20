import { expect } from 'chai';
import User from '../src/classes/User'



describe('User', () => {
  let user;

  it.skip('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.skip('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it.skip('should be able to favorite a recipe', () => {
    expect(user.favoriteRecipes.length).to.equal(2);
    expect(user.favoriteRecipes).to.deep.equal([recipe1, recipe2]);
  });

  it.skip('should be able to unfavorite a recipe', () => {
    expect(user.favoriteRecipes.length).to.equal(1);
    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  })

  
})
