import logo from '../../images/logo.svg';
import '../Header/Header.css';
import Navigation  from '../Navigation/Navigation';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header({ loggedIn }) {
    const location = useLocation();
    let headerVisible = false;
    let navigationVisible = false;
    if (
        location.pathname === '/profile' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/movies' 
    ) {
        headerVisible = true;
        navigationVisible = true;
    } else if (
            location.pathname === '/'
        ){
            headerVisible = false;
        navigationVisible = false;
        }
    
    return (
        <header className={`header ${headerVisible  && 'header_hidden'}`}>
            <Link to='/'>
                <img src={logo} className='header__logo' alt='логотип'/>
            </Link>
            {navigationVisible ? (
                <Navigation loggedIn={loggedIn}/>
            ) : (
                <div className='header__container'>
                    <Link to='/signup'>
                    <button className='header__signup'>Регистрация</button>
                    </Link>
                    <Link to="/signin">
                    <button className='header__signin'>Войти</button>
                    </Link>
            </div>
            )}
        </header>
    )
}
export default Header;