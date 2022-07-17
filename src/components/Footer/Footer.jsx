import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm</p>
            <div className='footer__columns'>
                <div className='footer__column'>
                    <p className='footer__copyright'>©2022</p>
                </div>
                <nav className='footer__column'>
                    <ul className='footer__column-list'>
                        <li className='footer__column-list_item'>
                            <a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__column-list_item'>
                            <a href='https://github.com/ReginaZigangirova' className='footer__link'>Github</a>
                        </li>
                        <li className='footer__column-list_item'>
                            <a href='https://ru-ru.facebook.com/' className='footer__link'>Facebook</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;