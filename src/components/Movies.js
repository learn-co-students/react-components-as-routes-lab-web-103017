import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1> Movies Page </h1>
        {movies.map((movie) => {
          return <div>
          <h2>{movie.title}</h2>
          <p>{movie.time}</p>
          <p>{movie.genres}</p>
          <p>{movie.metascore}</p>
          </div>})}
    </div>
  );
};

export default Movies;
