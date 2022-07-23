import './Login.css';
import Form from '../Form/Form';
import AuthHeader from '../AuthHeader/AuthHeader';
import React from 'react';

function Login ({onLogin}) {

    const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin( email, password);
  }
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
            <Form 
            texts={texts} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit}/>
        </main>
    )
}

export default Login