import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul className='moviesList'>
      {moviesList.map(item => (
        <li className='moviesItem' key={item.id}>
          <Link to={`/movies/${item.id}`} state={{from: location}}>{item.title || item.name} </Link>
        </li>
      ))}
    </ul>
  );
};  

<Link to="/about">About</Link>