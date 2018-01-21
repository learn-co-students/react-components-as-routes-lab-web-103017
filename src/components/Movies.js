import React from 'react';
import { movies } from '../data';

const Movies = () => {


  const mov = movies.map(m => {
    const genre = m.genres.map(g => {
      return <li>{g}</li>
    })

    return(
      <div>
        <p>{m.title}</p>
        <p>{m.time}</p>
        <ul>
          {genre}
        </ul>
      </div>
    )

  })



  console.log('Movies', movies);

  return (
    <div>
      <h1>Movies Page</h1>
        { mov }
    </div>
  );
}

export default Movies;
