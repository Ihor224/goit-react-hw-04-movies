import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchTrendingMovies } from '../services/api';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h2>Popular movies</h2>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </div>
  );
}
