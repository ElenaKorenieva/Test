import renderFunc from '../js/renderFunc';
import fetchData from '../js/fetch';

// renderFunc.renderRandomImg();
// fetchData.fetchRandomCocktail().then(res => console.log('Random', res));

// renderFunc.renderByName('margarita');
// fetchData
//   .fetchCocktailByName('margarita')
//   .then(res => console.log('Cocktail Name', res));

renderFunc.renderByLetter('a');
fetchData
  .fetchCocktailByLetter('a')
  .then(res => console.log('Cocktail letter', res));

// renderFunc.renderIngredientByName('vodka');
// fetchData
//   .fetchIngredientByName('vodka')
//   .then(res => console.log('Ïng y Name', res));

// renderFunc.renderById('11007');
// fetchData
//   .fetchCocktailDetailsById('11007')
//   .then(res => console.log('Detail by ID', res));

// fetchData
//   .fetchIngredientyId('552')
//   .then(res => console.log('Ingredient by ID', res));
