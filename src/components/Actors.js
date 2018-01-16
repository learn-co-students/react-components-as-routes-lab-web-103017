import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>

      <ul>{actors.map(actor =>
          <div className="actor">
            <h2>Name: {actor.name}</h2>
            {actor.movies.map(movie =>
             <li>{movie}</li>)}
          </div>)}
      </ul>

    </div>
  );
};

export default Actors;
