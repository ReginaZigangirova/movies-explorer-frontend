import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardsList (props) {
    return (
        <ul className='movies-card-list'>
            {props.movies.map((movies) => (
          <MoviesCard key={movies.id} movies={movies} />
        ))}
        </ul>
    )
}

export default MoviesCardsList;