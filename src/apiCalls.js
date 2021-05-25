  const userData = () => {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
  };

  const ingredientsData = () => {
    return fetch('http://localhost:3001/api/v1/ingredients')
   .then(response => response.json())
   .then(data => data)
   .catch(err => console.log(err))
 };

  const recipeData = () => {
    return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
  };

  const getData = () => Promise.all([userData(), ingredientsData(), recipeData()]);


// console.log('I will be a fetch request!')
export default getData;
