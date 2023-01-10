import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/api-tmdb';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(res => {
        setMoviesList(res.results);
        // console.log(res.results);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {moviesList.length > 0 && <MoviesList moviesList={moviesList}/>}
    </>
  );
};