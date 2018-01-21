import React from 'react';
import { directors } from '../data';

const Directors = () => {


    const dir = directors.map((d, i) => {
      const mov = d.movies.map((m, i) => {
        return <li key={i}>{m}</li>
      })

      return(
        <div key={i}>
          <p>{d.name}</p>
          <ul>
            {mov}
          </ul>
        </div>
      )
    })


  return (
    <div>
      <h1>Directors Page</h1>
      { dir }
    </div>
  );
}

export default Directors
