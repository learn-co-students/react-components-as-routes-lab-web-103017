import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)

  let directorDivs = directors.map((director,i) => {
    return(
      <div key={i}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>)
    })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
