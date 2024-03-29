import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardsList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi'
import ShowMore from '../ShowMore/ShowMore';

function Movies ({movies, handleMovieSave, handleMovieDelete, savedMoviesUser, cardsList}) {
    const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  const [initialMovies, setInitialMovies] = React.useState([]);
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  
  const [isSearchMovies, setSearchMovies] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState('');
  const [isSearchDone, setIsSearchDone] = React.useState(false);
    
  const [firstResultsNumber, setFirstResultsNumber] = React.useState(0);
  const [moreResultsNumber, setMoreResultsNumber] = React.useState(0);
  const currentViewport = document.documentElement.clientWidth;
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);
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
  React.useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      const init = JSON.parse(localStorage.getItem('searchResults'));
      const searchResult = moviesFilter(init, query, checkboxStatus);
      setFilteredMovies(searchResult);
      setIsSearchDone(true);
    }
  }, [])

  const handleSearch = (query, checkboxStatus) => {
    setMoviesToRender([]);
    setQuery(query);
    setCheckboxStatus(checkboxStatus);

    const initialMoviesInLocalStorage = JSON.parse(localStorage.getItem('initialMovies'));

    if (!initialMoviesInLocalStorage) {
      setSearchMovies(true);
      moviesApi.getMovies()
        .then((data) => {
          setInitialMovies(data);
          localStorage.setItem('initialMovies', JSON.stringify(data));
        })
        .catch(() => {
            setSearchStatus('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        })
        .finally(() => {
          setSearchMovies(false);
        })
    } else {
      setInitialMovies(initialMoviesInLocalStorage);
    }
  }
  
  React.useEffect(() => {
    if (initialMovies.length > 0) {
      const searchResults = moviesFilter(initialMovies, query, checkboxStatus);
      setFilteredMovies(searchResults);
      setIsSearchDone(true);
      localStorage.setItem('query', query);
      localStorage.setItem('checkboxStatus', checkboxStatus);
      localStorage.setItem('searchResults', JSON.stringify(searchResults));
    }
  }, [initialMovies, query, checkboxStatus]);
  
  React.useEffect(() => {
    if (currentViewport <= 480) {
      setFirstResultsNumber(5);
      setMoreResultsNumber(2);
    } else if (currentViewport <= 768) {
      setFirstResultsNumber(8);
      setMoreResultsNumber(2);
    } else if (currentViewport > 768) {
      setFirstResultsNumber(12);
      setMoreResultsNumber(3);
    }
  }, [currentViewport]);
  
  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      if (filteredMovies.length > firstResultsNumber) {
        
        setMoviesToRender(filteredMovies.slice(0, firstResultsNumber));
        setIsMoreButtonVisible(true);
      } else {
        setMoviesToRender(filteredMovies);
      }
    }
  }, [filteredMovies, firstResultsNumber]);
  
  function handleMoreButtonClick() {
    setMoviesToRender((state) => filteredMovies.slice(0, state.length + moreResultsNumber));
  }
  
  React.useEffect(() => {
    if (moviesToRender.length === filteredMovies.length) {
      setIsMoreButtonVisible(false);
    }
  }, [moviesToRender, filteredMovies]);
    return (
        <main className='movies'>
            <SearchForm onSearchMovies={handleSearch}/>
            {isSearchMovies 
            ? <Preloader />
          : isSearchDone
          ?moviesToRender.length > 0
        ?
            <MoviesCardsList 
            movies={moviesToRender}
            handleMovieSave={handleMovieSave}
            handleMovieDelete={handleMovieDelete}
            savedMoviesUser={savedMoviesUser}
            cardsList={cardsList}
            
            />
            : (!isSearchMovies ? 
              <span className="movies__nothing-found">Ничего не найдено</span>
              : <span className="movies__nothing-found">{searchStatus}</span>
            )
          : ("")
      }
        <ShowMore isMoreButtonVisible={isMoreButtonVisible}
                onMoreButtonClick={handleMoreButtonClick} />
        </main>
    )
}

export default Movies;