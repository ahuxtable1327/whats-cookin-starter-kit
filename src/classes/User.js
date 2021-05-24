import RecipeRepository from './RecipeRepository';


class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.favoriteRecipes = [];
    this.filteredFavorites = [];
    this.mealPlans = [];

  }
  addFavorite(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipeToDelete) {
    if(this.favoriteRecipes.includes(recipeToDelete)) {
      this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipeToDelete), 1);
    }
  }

  addToMealPlan(recipe) {
    if (!this.mealPlans.includes(recipe)) {
      this.mealPlans.push(recipe)
     }
   }

   filterFavoritesByTag(tag) {
     this.favoriteRecipes.reduce((acc, recipe) => {
       recipe.tags.filter(recTag => {
         if (recTag === tag) {
           acc.push(recipe);
         }
       })
       this.filteredFavorites = acc;
       return acc
     }, []);
   }

   filterFavoritesByName(string) {
     this.favoriteRecipes.reduce((acc, recipe) => {
       const lowerCaseName = recipe.name.toLowerCase();
       if (lowerCaseName.includes(string)) {
         acc.push(recipe);
       }
       this.filteredFavorites = acc;
       return acc;
     }, []);
   }
}

export default User;
