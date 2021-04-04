import { Route, Switch } from 'react-router-dom';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /* webpackChunkName: "NotFound" */),
);

function App() {
  return (
    <div>
      <AppBar />

      <Container>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/movies">
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
