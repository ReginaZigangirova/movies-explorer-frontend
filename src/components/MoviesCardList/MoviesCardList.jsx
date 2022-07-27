import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardsList (props) {
    return (
        <ul className='movies-card-list'>
            {props.movies.map((movie) => (
          <MoviesCard key={movie.id || movie.movieId} movie={movie} handleMovieSave={props.handleMovieSave}
          handleMovieDelete={props.handleMovieDelete} savedMoviesUser={props.savedMoviesUser} cardsList={props.cardsList} />
        ))}
        </ul>
        
    )
}

export default MoviesCardsList;