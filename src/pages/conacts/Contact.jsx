import React, { useEffect } from 'react'
import "./Contact.scss"
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
    return (
        <div>
            <section className="contact">
                <div className="container">
                    <div className="contact__wrapper">
                        <div className="contact__card">
                            <ul className="contact__collection">
                                <li className="contact__item">
                                    <NavLink to={"/"}>
                                        <span className='home'>Главная</span>
                                    </NavLink>
                                </li>
                                <li className='contact__item'>
                                    <MdKeyboardArrowRight />
                                </li>
                                <li className="contact__item">
                                    <NavLink to={"/contact"}>
                                        <span>Доставка и оплата</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <h4 className="contact__title">Контакты</h4>
                        </div>
                        <div className="contact__card">
                            <h4 className="contact__num">8 (800) 890-46-56</h4>
                            <p className="contact__time">
                                Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1731339213171!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="container">
                        <div className="contact__map_wrapper">
                            <div className="contact__map_card">
                                <h4 className="contact__map_subtitle">
                                    Адрес магазина
                                </h4>
                                <p className="contact__map_title">
                                    г. Москва, Дмитровское шоссе д.100с2
                                </p>
                            </div>
                            <div className="contact__map_card">
                                <h4 className="contact__map_subtitle">Почта</h4>
                                <p className="contact__map_title">NORNLIGHT@mail.ru</p>
                            </div>
                            <div className="contact__map_card">
                                <h4 className="contact__map_subtitle">Телефон</h4>
                                <p className="contact__map_title">8 (800) 890-46-56</p>
                            </div>
                            <div className="contact__map_card">
                                <button>Оставить заявку </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact