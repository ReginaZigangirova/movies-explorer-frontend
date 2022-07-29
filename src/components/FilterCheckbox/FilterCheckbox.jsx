import './FilterCheckbox.css';

function FilterCheckbox ({handleCheckboxChange, checkboxStatus, setCheckboxStatus}) {
    return (
           <label className='filter-checkbox'>
            <input onChange={handleCheckboxChange} className="filter-checkbox__invisible-checkbox" type="checkbox" />
            <span className={!checkboxStatus ? "filter-checkbox__pseudo-checkbox" : "filter-checkbox__pseudo-checkboxon"}></span>
            <span className="filter-checkbox-label-text">Короткометражки</span>
          </label>
    )
}

export default FilterCheckbox;