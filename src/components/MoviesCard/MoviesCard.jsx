import './MoviesCard.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import  MOVIES  from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import {duration} from '../../utils/constants'

function MoviesCard ({movie, cardsList, handleMovieSave, handleMovieDelete}) {
  
  const isSaved = movie.id && cardsList.some((m) => m.movieId === movie.id);

  const handleMoviesSeved = () => {
    if (isSaved) {
      handleMovieDelete(cardsList.filter((m) => m.movieId === movie.id)[0]);
    } else if (!isSaved) {
      handleMovieSave({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    }
  }

  const handleMoviesDelete = () => {
    handleMovieDelete(movie);
  }

  const { pathname } = useLocation();

    return (
        <li className='movies-card'>
          <a className="movies-card__link" href={movie.trailerLink} target="_blank">
          <Switch>
            <Route path='/movies'>
            <img src={`${MOVIES}${movie.image.url}`} alt={movie.nameRU} className='movies-card__image' />
            </Route>
            <Route path='/saved-movies'>
              <img className='movies-card__image' src={movie.image} alt={movie.nameRU} />
            </Route>
          </Switch>
          </a>
            <div className='movies-card__text'>
                <div className='movies-card__container'>
                <h2 className='movies-card__title'>{movie.nameRU}</h2>
                {pathname === '/saved-movies' ? (
            <button type="button" className='movies-card__delete' onClick={handleMoviesDelete}/>
            
          ) : (
            <button
              type="button"
              className= {!isSaved ? `movies-card__like_inactive` : `movies-card__like_active`}
              onClick={handleMoviesSeved}
            />
          )}
                </div>
                <p className='movies-card__duration'>{duration(movie.duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;