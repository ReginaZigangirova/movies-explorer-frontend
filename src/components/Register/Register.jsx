import './Register.css';
import Form from '../Form/Form';
import AuthHeader from '../AuthHeader/AuthHeader';
import React from 'react';

function Register ({onRegister}) {
    const texts = {
        buttonText: 'Зарегистрироваться',
        subText: 'Уже зарегистрированы?',
        linkText: 'Войти',
        linkAddr: '/signin'
      };
      const textHeader = {
          titleText: 'Добро пожаловать!'
      }
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  const handleNameChange = (e) => {
      setName(e.target.value)
  } 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password);
  }
    return (
        <main className='register__main'>
            <AuthHeader 
            textHeader={textHeader}/>
            <Form  texts={texts} handleSubmit={handleSubmit} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} >
            <p className='form__label'>Имя</p>
        <input className='form__input' name='name' minLength='2' maxLength='40'  onChange={handleNameChange} required></input>
        </Form>
        </main>
    )
}

export default Register;