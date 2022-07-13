import './Portfolio.css'

function Portfolio () {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__header'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' target='_blank' href='https://github.com/ReginaZigangirova/how-to-learn'>Статичный сайт
                    <span className='portfolio__span'>↗</span>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' target='_blank' href='https://github.com/ReginaZigangirova/russian-travel'>Адаптивный сайт
                    <span className='portfolio__span'>↗</span>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' target='_blank' href='https://github.com/ReginaZigangirova/react-mesto-auth'>Одностраничное приложение
                    <span className='portfolio__span'>↗</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;