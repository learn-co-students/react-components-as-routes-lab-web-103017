import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>

        <h1>Directors Page</h1>
        {directors.map(director=> {
          return(
          <div>
            <h4>Name:{director.name}</h4>
            <ul>
              {director.movies.map(genre=>{
                return(
                <li>{genre}</li>)
              })}
            </ul>
          </div>)
        })}

    </div>
  );
}

export default Directors
