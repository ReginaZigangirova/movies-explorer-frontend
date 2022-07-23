import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import icon from '../../images/icon.svg';
import React from 'react'

function SearchForm () {
    return (
    <form className='search-form'>
        <div className='search-form__container'>
            <img src={icon} className='search-form__img'></img>
        <input placeholder='Фильм' className='search-form__input' required/>
        <button className='search-form__button'>Найти</button>
        </div>
        <FilterCheckbox />
    </form>
    )
}

export default SearchForm;