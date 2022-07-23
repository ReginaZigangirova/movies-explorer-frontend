import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

function Profile({logoutProfile, userName, userEmail}) {
    const location = useLocation();
    return (
        <main className='profile'>
            <h2 className='profile__title'>Привет, {location.pathname === "/profile" ? userName : ""}</h2>
            <form className='profile-form'>
                <label className='profile-form__label'>
                Имя
                <input className='profile-form__input' required value={userName}></input>
                </label>
                <label className='profile-form__label'>
                E-mail
                <input className='profile-form__input' required value={userEmail}></input>
                </label>
                <button className='profile-form__button'>Редактировать</button>
            </form>
            <button className='profile-form__logout' type='button' onClick={logoutProfile}>Выйти из аккаунта</button>
        </main>
    )
}

export default Profile;