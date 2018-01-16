import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map( (movie, i) => (
          <div key={i}>
            <h2>Name: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            <ul>Genres:</ul>
              {movie.genres.map((genre, j) => (<ul key={j}>{genre}</ul>))}
          </div>
      ))}
    </div>
  );
};

export default Movies;
