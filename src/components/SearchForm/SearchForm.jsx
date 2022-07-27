import './SearchForm.css';
import { useLocation } from 'react-router-dom'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import icon from '../../images/icon.svg';
import React from 'react'

function SearchForm ({onSearchMovies}) {
    const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  let location = useLocation();
  
  React.useEffect(() => {
    const value = localStorage.getItem('checkboxStatus');
      if (location.pathname === '/movies') {
        if (localStorage.getItem('query')) {
          setQuery(localStorage.getItem('query'));
        } 
        if (JSON.parse(value) === true) {
          setCheckboxStatus(true);
        } else {
          setCheckboxStatus(false);
        }
      }  
    }, [location.pathname])
  
  const handleQueryChange = (e) => {
    const input = document.getElementById('queryInput');
    input.setCustomValidity('');
    setQuery(e.target.value);
        
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchMovies(query, checkboxStatus);
   
  }

  const handleChange = (checkboxStatus) => {
    setCheckboxStatus(checkboxStatus);
    onSearchMovies(query, checkboxStatus);
  }

  const handleCheckboxChange = (e) => {
    handleChange(e.target.checked);
  }

  React.useEffect(() => {
    if (!query) {
      const input = document.getElementById('queryInput');
      input.setCustomValidity('Нужно ввести ключевое слово');
    }
  }, [query])
    return (
    <form className='search-form' onSubmit={handleSubmit}>
        <div className='search-form__container'>
            <img src={icon} className='search-form__img'></img>
        <input placeholder='Фильм' className='search-form__input' id="queryInput"
            value={query || ''}
            onChange={handleQueryChange}required/>
        <button className='search-form__button'>Найти</button>
        </div>
        <FilterCheckbox handleCheckboxChange={handleCheckboxChange} checkboxStatus={checkboxStatus} />
    </form>
    )
}

export default SearchForm;