import { useState, useEffect } from 'react';
import { fetchCast } from '../../services/api';

export default function Cast({ movieId }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(setCredits);
  }, [movieId]);

  return (
    <ul>
      {credits.cast &&
        credits.cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="50px"
            />
            {actor.name}
          </li>
        ))}
    </ul>
  );
}
