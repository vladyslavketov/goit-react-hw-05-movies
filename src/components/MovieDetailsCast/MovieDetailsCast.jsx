import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsCast } from '../../api/api-tmdb';
import css from '../../page/MovieDetails/MovieDetails.module.css';

export const MovieDetailsCast = () => {
  const { movieId } = useParams();
  const [movieDetailsCast, setMovieDetailsCast] = useState(null);

  useEffect(() => {
    getMovieDetailsCast(movieId)
      .then(res => {
        if (res.cast) {
          setMovieDetailsCast(res.cast); 
        } else {
          console.log("результатів немає", res);
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);

   if (!movieDetailsCast) {
    return;
  };

  return (
    <>
      <ul className={css.castList}>
        {movieDetailsCast.map(item => {
          const { id, name, character, profile_path } = item;
          let profileImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

          if (!profile_path) {
            profileImg = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
          };

          return (
            <li className={css.castItem} key={id}>
              <img className={css.castImg} src={profileImg} alt={name} width="120"/>
              <p className={css.castDesc}>{name}</p>
              <p className={css.castDesc}>{character}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
};  