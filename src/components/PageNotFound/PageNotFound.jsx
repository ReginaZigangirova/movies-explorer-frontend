import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

function PageNotFound () {
    const history = useHistory();
    return (
        <main className='page-notfound'>
            <div className='page-notfound__container'>
                <h2 className='page-notfound__title'>404</h2>
                <p className='page-notfound__text'>Страница не найдена</p>
            </div>
            <button className='page-notfound__back' onClick={() => history.goBack()}>Назад</button>
        </main>
    )
}

export default PageNotFound;