import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard ({movies}) {
    const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteToogle() {
    setFavorite(!favorite);
  }
  const { pathname } = useLocation();

    return (
        <li className='movies-card'>
            <img src={movies.image} alt={movies.title} className='movies-card__image' />
            <div className='movies-card__text'>
                <div className='movies-card__container'>
                <h2 className='movies-card__title'>{movies.title}</h2>
                {pathname === '/saved-movies' ? (
            <button type="button" className='movies-card__delete' />
          ) : (
            <button
              type="button"
              className={`movies-card__like${favorite ? '_active' : '_inactive'}`}
              onClick={handleFavoriteToogle}
            />
          )}
                </div>
                <p className='movies-card__duration'>{movies.duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;