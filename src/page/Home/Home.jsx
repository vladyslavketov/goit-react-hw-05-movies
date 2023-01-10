import { useState, useEffect } from 'react';
// import { getTrendingMovies } from '../../api/api-tmdb';
import { getMovies } from '../../api/api-tmdb';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  // useEffect(() => {
  //   getTrendingMovies()
  //     .then(res => {
  //       setMoviesList(res.results);
  //     });
  // }, []);

  useEffect(() => {
    getMovies('trend')
      .then(res => {
        setMoviesList(res.results);
      });
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {moviesList.length > 0 && <MoviesList moviesList={moviesList}/>}
    </section>
  );
};

export default Home;