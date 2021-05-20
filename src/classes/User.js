import RecipeRepository from './RecipeRepository';


class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.favoriteRecipes = [];

  }
  addFavorite(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }
}

export default User;
