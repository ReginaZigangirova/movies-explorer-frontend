import './AboutProject.css';

function AboutProject () {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__columns'>
                <div className='about-project__column'>
                    <h3 className='about-project__column-title'>Дипломный проект включал 5 этапов</h3>
                        <p className='about-project__column-subtitle'>Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__column'>
                    <h3 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h3>
                        <p className='about-project__column-subtitle'>У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__diagram'>
                <div className='about-project__diagram-beck'>
                    <p className='about-project__diagram-text'>1 неделя</p>
                    <p className='about-project__diagram-sub'>Back-end</p>
                </div>
                <div className='about-project__diagram-front'>
                    <p className='about-project__diagram-text about-project__diagram-text-front'>4 недели</p>
                    <p className='about-project__diagram-sub'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;