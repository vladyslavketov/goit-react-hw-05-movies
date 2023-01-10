import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../api/api-tmdb';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const showMoviesList = moviesList.length > 0 && searchQuery;
  
  function onSearchBoxSubmit (e) {
    e.preventDefault();

    const currentSearchQuery = e.target.name.value;

    setSearchQuery(currentSearchQuery !== '' ? currentSearchQuery : '');
    setSearchParam(currentSearchQuery !== '' ? { query: currentSearchQuery } : {});
  };

  useEffect(() => {
    setSearchQuery(searchParam.get('query'));

    if (searchQuery) {
      getSearchMovies(searchQuery)
      .then(res => {
        setMoviesList(res.results);
      });
    }
    // else {
    //   console.log("searchQuery is NULL", searchQuery)
    // }
  }, [searchQuery, searchParam]);

  return (
    <section>
      <SearchBox onSubmit={onSearchBoxSubmit}/>
      {showMoviesList && <MoviesList moviesList={moviesList}/>}
    </section>
  );
};