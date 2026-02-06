export const sun = '../../images/reasons/sun.png';
export const cup = '../../images/reasons/cup.png';
export const calendar = '../../images/reasons/calendar.png';

export const Reasons = () => {
    return <>
        <section className="reasons">
            <h2 className="reasons__title">Чому варто обрати Зернятко?</h2>
            <ul className="reasons__list">
                <li className="reasons__item">
                    <img src={sun} alt="sun" className="reasons__img" />
                    <h3 className="reasons__item__title">Смак і якість</h3>
                    <p className="reasons__text">Лише відібрані кавові зерна та товари від перевірених виробників.</p>
                </li>
                <li className="reasons__item">
                    <img src={cup} alt="cup" className="reasons__img" />
                    <h3 className="reasons__item__title">Усе для кавового ритуалу</h3>
                    <p className="reasons__text">Від турки до кавомолки — ми зібрали повний набір для ідеальної чашки.</p>
                </li>
                <li className="reasons__item">
                    <img src={calendar} alt="calendar" className="reasons__img" />
                    <h3 className="reasons__item__title">Натхнення щодня</h3>
                    <p className="reasons__text">Кава, яка підкреслить твій настрій та стане головною частиною ранкової звички.</p>
                </li>
            </ul>
        </section>
    </>
}