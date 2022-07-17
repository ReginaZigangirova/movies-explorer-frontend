import './FilterCheckbox.css';

function FilterCheckbox () {
    return (
        <div className='filter-checkbox'>
            <label className="filter-checkbox__switch">
               <input type="checkbox" />
               <span className="filter-checkbox__slider filter-checkbox__round"></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;