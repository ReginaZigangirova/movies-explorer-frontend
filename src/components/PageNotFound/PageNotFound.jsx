import './PageNotFound.css';

function PageNotFound () {
    return (
        <main className='page-notfound'>
            <div className='page-notfound__container'>
                <h2 className='page-notfound__title'>404</h2>
                <p className='page-notfound__text'>Страница не найдена</p>
            </div>
            <p className='page-notfound__back'>Назад</p>
        </main>
    )
}

export default PageNotFound;