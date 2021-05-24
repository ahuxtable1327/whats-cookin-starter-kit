const fetchData = () => {

  const userData = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(userData => {
      return userData;
    });

  const ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
   .then(response => response.json())
   .then(ingredientsData => {
     return ingredientsData;
   });

  const recipeData = fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(recipeData => {
      return recipeData;
    });

  //need a promise to be returned
  const promise

}


console.log('I will be a fetch request!')
