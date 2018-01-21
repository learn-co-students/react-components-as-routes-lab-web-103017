import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors);
  const act = actors.map((a, i) => {
    const mov = a.movies.map((m, i) => {
      return(
        <li key={i}>{m}</li>
      )
    })

      return(
        <div key={i}>
          <p>{a.name}</p>
          <ul>
            { mov }
          </ul>
        </div>
      )
  })


  return (
    <div>
      <h1>Actors Page</h1>
      { act }
    </div>
  );
};

export default Actors;
