import fetchData from '../js/fetch';

const gallery = document.querySelector('.gallery__list');

// object of pagameters to get amount of images to render
const resolutionQuery = {
  0: 3,
  1: 6,
  2: 9,
};

// create markup function
function createMarkup(arr) {
  let markup = arr.map(
    ({ strDrinkThumb, strDrink }) => `
        <li class="gallery__card">
            <img src='${strDrinkThumb}' alt='${strDrink}' class="gallery__photo" loading='lazy'/>
             <div class="gallery__info">
                <h5 class="gallery__title">${strDrink}</h5>
                <div class="button__container">
                  <button class="button-more">Learn more</button>
                  <button class="button-add">Add to <span class="button-add__icon")">
                  </span></button>
                </div>
             </div>
            </li>
      `
  );
  return markup.join('');
}

// add random images to markup
async function renderRandomImg() {
  gallery.innerHTML = '';
  const key = Math.floor(window.innerWidth / 600);
  const cocktailsCount = resolutionQuery[key];

  const requestArr = Array(cocktailsCount)
    .fill(1)
    .map(_ => fetchData.fetchRandomCocktail());
  const response = await Promise.all(requestArr);
  const result = response.map(({ drinks }) => drinks[0]);
  gallery.insertAdjacentHTML('afterbegin', createMarkup(result));
}

// add fetched by name images to markup
async function renderByName(query) {
  gallery.innerHTML = '';
  const key = Math.floor(window.innerWidth / 600);
  const cocktailsCount = resolutionQuery[key];

  const requestArr = Array(cocktailsCount)
    .fill(1)
    .map(_ => fetchData.fetchCocktailByName(query));

  const response = await Promise.all(requestArr);
  const result = response.map(({ drinks }) => drinks).flat(1);
  gallery.insertAdjacentHTML('afterbegin', createMarkup(result));
}

// add fetched by letter images to markup
async function renderByLetter(query) {
  gallery.innerHTML = '';
  const key = Math.floor(window.innerWidth / 600);
  const cocktailsCount = resolutionQuery[key];

  const requestArr = Array(cocktailsCount)
    .fill(1)
    .map(_ => fetchData.fetchCocktailByLetter(query));
  const response = await Promise.all(requestArr);
  const result = response.map(({ drinks }) => drinks).flat(1);
  gallery.insertAdjacentHTML('afterbegin', createMarkup(result));
}

//export of all functions as an object
export default {
  renderRandomImg,
  renderByName,
  renderByLetter,
};
