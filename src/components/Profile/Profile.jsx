import './Profile.css';

function Profile() {
    return (
        <main className='profile'>
            <h2 className='profile__title'>Привет, Виталий</h2>
            <form className='profile-form'>
                <label className='profile-form__label'>
                Имя
                <input className='profile-form__input'></input>
                </label>
                <label className='profile-form__label'>
                E-mail
                <input className='profile-form__input'></input>
                </label>
                <button className='profile-form__button'>Редактировать</button>
            </form>
            <p className='profile-form__logout'>Выйти из аккаунта</p>
        </main>
    )
}

export default Profile;