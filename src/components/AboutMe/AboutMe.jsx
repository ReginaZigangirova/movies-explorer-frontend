import './AboutMe.css';
import photo from '../../images/myphoto.jpeg';

function AboutMe () {
    return (
        <section className='about-me'>
            <h2 className='about-me__header'>Студент</h2>
            <div className='about-me__columns'>
            <div className='about-me__column'>
                <h3 className='about-me__title'>Регина</h3>
                <p className='about-me__subtitle'>Фронтенд-разработчик, 20 лет</p>
                <p className='about-me__text'>Я родилась и живу в Нижнекамске, закончила колледж нефтехимии и нефтепереработки. С 2021 года прохожу курс по веб-разработке. Меня привлекает перспектива развития, а также вероятность реализовать свой творческий потенциал.</p>
                <ul className='about-me__list'>
                    <li className='about-me__list-item'>
                        <a className='about-me__link' href='https://ru-ru.facebook.com/' target='blank'>Facebook</a>
                    </li>
                    <li className='about-me__list-item'>
                        <a className='about-me__link' href='https://github.com/ReginaZigangirova' target='blank'>Github</a>
                    </li>
                </ul>
            </div>
            <img src={photo} className='about-me__img' alt='мое фото'/>
            </div>
        </section>
    )
}

export default AboutMe;