import './Form.css'

function Form ({texts, children, handleSubmit, handlePasswordChange, handleEmailChange}) {
    return (
        <>
    <form className='form' onSubmit={handleSubmit}>
    {children}
             <p className='form__label'>E-mail</p>
             <input type='email' className='form__input' onChange={handleEmailChange} required></input>
             <p className='form__label'>Пароль</p>
             <input type='current-password' className='form__input' onChange={handlePasswordChange} required></input>
             <button type='submit' className='form__button form__button_register'>{texts.buttonText}</button>
         </form>
         <p className='form__text'>{texts.subText}
         <a className='form__link' href={texts.linkAddr}> {texts.linkText}</a>
         </p>
         </>
         )
}

export default Form;
