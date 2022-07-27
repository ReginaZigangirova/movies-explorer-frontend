import './FilterCheckbox.css';

function FilterCheckbox ({handleCheckboxChange, checkboxStatus}) {
    return (
        <div className='filter-checkbox'>
            <label className="filter-checkbox__switch">
               <input type="checkbox" onChange={handleCheckboxChange}/>
               <span className= {!checkboxStatus ? "filter-checkbox__slider filter-checkbox__round" :"filter-checkbox__slider filter-checkbox__round"}></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;