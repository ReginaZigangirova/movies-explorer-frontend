import './MoviesCard.css';

function MoviesCard ({movies}) {
    return (
        <li className='movies-card'>
            <img src={movies.image} alt={movies.title} className='movies-card__image' />
            <div className='movies-card__text'>
                <div className='movies-card__container'>
                <h2 className='movies-card__title'>{movies.title}</h2>
                <button className='movies-card__like' />
                </div>
                <p className='movies-card__duration'>{movies.duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;