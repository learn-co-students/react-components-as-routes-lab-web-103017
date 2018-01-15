import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorShow = directors.map((director, i) =>
    <div key={i}>
      <h2>{director.name}</h2>
      <h3>Movies</h3>
      <ul>
        {director.movies.map((movie, i) => <li key={i}>{movie}</li>)}
      </ul>
    </div>
 )
  return (
    <div>
      <h1>Directors Page</h1>
      {directorShow}
    </div>
  );
}

export default Directors
