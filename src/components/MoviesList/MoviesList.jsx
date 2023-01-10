import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  return (
    <ul className='moviesList'>
      {moviesList.map(item => (
        <li className='moviesItem' key={item.id}>
          <Link>{item.title || item.name}</Link>
        </li>
      ))}
    </ul>
  );
};  