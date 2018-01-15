import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieShow = movies.map((movie, i) =>
    <div key={i}>
      <h2>{movie.title}</h2>
      <h3>Run Time:{movie.time}</h3>
      <h3>Genres</h3>
      <ul>
        {movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
        <h1>Movies Page</h1>
        {movieShow}
    </div>
  );
};

export default Movies;
