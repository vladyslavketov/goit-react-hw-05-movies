import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsReviews } from '../../api/api-tmdb';
import css from '../../page/MovieDetails/MovieDetails.module.css';

const MovieDetailsReviews = () => {
  const { movieId } = useParams();
  const [movieDetailsReviews, setMovieDetailsReviews] = useState(null);

  useEffect(() => {
    getMovieDetailsReviews(movieId)
      .then(res => {
        if (res.total_results) {
          setMovieDetailsReviews(res.results); 
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);
  
  if (!movieDetailsReviews) {
    return;
  };

  return (
    <>
      <ul className={css.reviewsList}>
        {movieDetailsReviews.map(item => {
          const { id, author, content } = item;
          
          return (
            <li className={css.reviewsItem} key={id}>
              <p className={css.reviewsAuthor}>Author: {author}</p>
              <p className={css.reviewsContent}>{content}</p>
            </li>
          )}
        )}
      </ul>
    </>
    
  );
};  

export default MovieDetailsReviews;