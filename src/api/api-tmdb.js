// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9cb79068ade378f45d510f1b7326cccd';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    .then(res => res.json());
};

export function getSearchMovies(searchQuery) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    .then(res => res.json());
};


// export default function fetchPixabay(searchQuery, page) {
//   const API_KEY = '31407944-a77d666384d67064142e5c37e';

//   return fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }

//       return Promise.reject(
//         new Error(`Немає зображення за запитом ${searchQuery}`),
//       );
//     })
// }
