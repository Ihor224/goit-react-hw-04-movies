import { useState } from 'react';
import { fetchMovies } from '../services/api';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
const queryString = require('query-string');

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState(
    location.search ? queryString.parse(location.search).query : '',
  );

  const [movies, setMoveis] = useState(
    location.state ? location.state.movies : [],
  );

  const handleInputChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('enter movie');
      return;
    }

    history.push({
      ...location,
      search: `?query=${query}`,
    });

    fetchMovies(query).then(setMoveis);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleInputChange}
          type="text"
          placeholder="Search movies"
          autoComplete="off"
        />
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { query, movies },
                }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
