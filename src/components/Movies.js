import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieDivs = movies.map((movie,i) => {
    return(
      <div key={i}>
        <h2>{movie.title}</h2>
        <h3>Length: {movie.time} minutes</h3>
        <ul>
          {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
};

export default Movies;
