import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        { actors.map( (actor, i) => (
            <div key={i}>
              <h2>Name: {actor.name}</h2>
              <ul>Movies:</ul>
                {actor.movies.map((movie, j) => (<ul key={j}>{movie}</ul>))}
            </div>
        ))}
    </div>
  );
};

export default Actors;
