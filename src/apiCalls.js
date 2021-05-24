  const userData = () => fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => )
    .catch(err => console.log('error!'));

  const ingredientsData = () => fetch('http://localhost:3001/api/v1/ingredients')
   .then(response => response.json())
   .then(data => )
   .catch(err => console.log('error!'));

  const recipeData = () => fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(data => )
    .catch(err => console.log('error!'));

  const getData = () => Promise.all([userData(), ingredientsData(), recipeData()]);


// console.log('I will be a fetch request!')
export default getData;
