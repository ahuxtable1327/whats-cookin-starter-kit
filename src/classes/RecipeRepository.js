class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
    this.recipeList =[];

    // this.filteredList =[];s
  }
  filterByTag(tag) {
    this.recipes.reduce((acc, recipe) => {
      recipe.tags.filter(recTag => {
        if (recTag === tag) {
          acc.push(recipe);
        }
      })
      this.recipeList = acc;
      return acc
    }, []);
  }

  filterByName(string) {
    this.recipes.reduce((acc, recipe) => {
      const lowerCaseName = recipe.name.toLowerCase();
      if (lowerCaseName.includes(string)) {
        acc.push(recipe);
      }
      this.recipeList = acc;
      return acc;
    }, []);

  }
  filterByIngredient(ingredient) {
    
  }
  // filter/map iterate over ingredient array and only return id
  // then filter through recipes.ingredients to return an array

  }



export default RecipeRepository;
