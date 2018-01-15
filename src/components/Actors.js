import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorDivs = actors.map((actor, i) => {
    return(
      <div className={i}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
