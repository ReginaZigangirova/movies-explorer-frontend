import './Promo.css';
import img from '../../images/text.png'
function Promo () {
    return (
        <section className='promo'>
            <div className='promo__text'>
                <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
                <h3 className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
                <button className='promo__link'>Узнать больше</button>
            </div>
            <img src={img} className='promo__img' />
        </section> 
    )
}

export default Promo;

