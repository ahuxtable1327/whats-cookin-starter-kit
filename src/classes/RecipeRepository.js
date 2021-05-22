class RecipeRepository {
  constructor(recipes, ingredients) {
    this.recipes = recipes;
    this.ingredients = ingredients;
    // this.ingredientIds =[];
    this.recipeList =[];

    // this.filteredList =[];s
  }
  filterByTag(tag) {
    this.recipes.reduce((acc, recipe) => {
      recipe.tags.filter(recTag => {
        if (recTag.includes(tag)) {
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
    let ingredientObj = this.ingredients.find(ing => {
      return ing.name === ingredient
      });

    this.recipes.filter(recipe => {
      recipe.ingredients.forEach(ingred => {
        if (ingred.id === ingredientObj.id){
          this.recipeList.push(recipe)
        }
      });
    });
    return this.recipeList
  }


  }



export default RecipeRepository;
