import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardsList from '../MoviesCardList/MoviesCardList';

function SavedMovies ({cardsList, handleMovieDelete}) {
    const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isSearchDone, setIsSearchDone] = React.useState(false);

  const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  function moviesFilter(movies, query, checkboxStatus) {
    let moviesFilter = movies;
    let result;
  
    if (checkboxStatus) {
      moviesFilter = moviesFilter.filter((movie) => movie.duration <= 40);
    }
  
    result = moviesFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    return result;
  }

  function handleSearch(query, checkboxStatus) {
    setQuery(query);
    setCheckboxStatus(checkboxStatus);
    const searchResult = moviesFilter(cardsList, query, checkboxStatus);
    setFilteredMovies(searchResult);
    setIsSearchDone(true);
  }

  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      const searchResult = moviesFilter(cardsList, query, checkboxStatus);
      setFilteredMovies(searchResult);
    }
  }, [cardsList]);


    return (
        <div className='saved-movies'>
            <SearchForm onSearchMovies={handleSearch}/>
            {isSearchDone ? 
            filteredMovies.length > 0
        ?
        <MoviesCardsList movies={filteredMovies} handleMovieDelete={handleMovieDelete} />
        : (
            <span className='saved-movies__span'>
                Ничего не найдено
            </span>
        )
        : <MoviesCardsList movies={cardsList} handleMovieDelete={handleMovieDelete} /> }
        </div>
    )
}

export default SavedMovies;