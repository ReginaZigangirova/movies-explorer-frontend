import './Login.css'
import Form from '../Form/Form'
import AuthHeader from '../AuthHeader/AuthHeader'

function Login () {
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
            texts={texts}/>
        </main>
    )
}

export default Login