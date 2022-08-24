import './Login.css';
import '../Form/Form.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import React from 'react';
import { useFormWithValidation } from '../../utils/formValidation';

function Login ({onLogin, isSending, requestStatus: { message } }) {
    const { values, handleChange, resetFrom, errors, isValid } = useFormWithValidation();
  const isDisabled = !isValid || !isSending;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

    const texts = {
        buttonText: 'Войти',
        subText: 'Ещё не зарегистрированы?',
        linkText: 'Регистрация',
        linkAddr: '/signup'
      };
      const textHeader = {
          titleText: 'Рады видеть!'
      }
    return (
        <main className='login__main'>
            <AuthHeader 
            textHeader={textHeader}/>
            <form className='form' onSubmit={handleSubmit}>
           <p className='form__label'>E-mail</p>
            <input type='email' name='email' className='form__input' onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={values.email || ''} required></input>
             <span className="form__input_error">{errors.email || ''}</span>
              <p className='form__label'>Пароль</p>
              <input type='password' name='password' className='form__input' onChange={handleChange} value={values.password || ''} required></input>
              <span className="form__input_error">{errors.password || ''}</span>
         <span className="form__input_feedback">{message}</span>
              <button type='submit' disabled={isDisabled} className='form__button form__button_register'>{texts.buttonText}</button>
          </form>
          <p className='form__text'>{texts.subText}
          <a className='form__link' href={texts.linkAddr}> {texts.linkText}</a>
          </p>
        </main>
    )
}

export default Login