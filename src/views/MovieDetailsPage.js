import { useEffect, useState, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import s from '../Components/Navigation/Navigation.module.css';

const Cast = lazy(() =>
  import('../Components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../Components/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleButtonClick = () => {
    location.state
      ? history.push({
          pathname: '/movies',
          search: `?query=${location.state.query}`,
          state: { movies: location.state.movies, query: location.state.query },
        })
      : history.push({ pathname: '/' });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Go back</button>
      {movie && (
        <div className={s.detailsPage}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie.title}
            height="200px"
          />

          <div className={s.desc}>
            <h2>{movie.title}</h2>
            <h3>Rate {movie.vote_average}</h3>
            <h3>Genres</h3>

            <ul className={s.genresList}>
              {movie?.genres.map(genre => (
                <li key={genre.id}>{genre.name}&nbsp;</li>
              ))}
            </ul>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}

      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: location.state ? location.state : null,
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: location.state ? location.state : null,
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </div>
  );
}
