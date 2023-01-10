import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from '../page/Home/Home';
import { Movies } from '../page/Movies/Movies';
import { MovieDetails } from '../page/MovieDetails/MovieDetails';
import { MovieDetailsCast } from './MovieDetailsCast/MovieDetailsCast';
import { MovieDetailsReviews } from './MovieDetailsReviews/MovieDetailsReviews';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetailsCast />} />
          <Route path="reviews" element={<MovieDetailsReviews />}/>
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.