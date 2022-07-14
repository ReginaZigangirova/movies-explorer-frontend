import './Techs.css';

function Techs () {
    return (
        <section className='techs'>
            <h2 className='techs__header'>Технологии</h2>
            <div className='techs__container'>
            <h3 className='techs__title'>7 технологий</h3>
            <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применяли в дипломном проекте.</p>
            <ul className='techs__links'>
                <li className='techs__item'>
                    <a className='techs__link' href='https://developer.mozilla.org/ru/docs/Web/HTML'>HTML</a>
                </li>
                <li className='techs__item'>
                    <a className='techs__link' href='https://developer.mozilla.org/ru/docs/Web/CSS'>CSS</a>
                </li>
                <li className='techs__item'>
                    <a className='techs__link' href='https://developer.mozilla.org/ru/docs/Web/JavaScript'>JS</a>
                </li>
                <li className='techs__item'>
                    <a className='techs__link' href='https://reactjs.org/docs/getting-started.html'>React</a>
                </li>
                <li className='techs__item'>
                    <a className='techs__link' href='https://github.com/'>Git</a>
                </li>
                <li className='techs__item'>
                    <a className='techs__link' href='https://expressjs.com/'>Express.js</a>
                </li>
                <li className='techs__item'>
                    <a className='techs__link' href='https://www.mongodb.com/docs/'>mongoDB</a>
                </li>
            </ul>
            </div>
        </section>
    )
}

export default Techs;