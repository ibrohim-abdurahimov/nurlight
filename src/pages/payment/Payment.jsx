import React, { memo, useEffect } from 'react'
import "./Payment.scss"
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const Payment = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <section className='payment'>
        <div className="container">
          <ul className="payment__collection">
            <li className="payment__item">
              <NavLink to={"/"}>
                <span className='home'>Главная</span>
              </NavLink>
            </li>
            <li className='payment__item'>
              <MdKeyboardArrowRight />
            </li>
            <li className="payment__item">
              <NavLink to={"/payment"}>
                <span>Доставка и оплата</span>
              </NavLink>
            </li>
          </ul>
          <div className="payment__wrapper">
            <h4 className="payment__title">Доставка и оплата</h4>
            <div className="payment__text">
              <div className="payment__card">
                <p className="payment__card_title">Доставка</p>
                <p className="payment__card_desc">
                  Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. <span>Сроки доставки: 4—6 недель</span>
                </p>
              </div>
              <div className="payment__card">
                <p className="payment__card_title">Курьерская доставка</p>
                <p className="payment__card_desc">
                  БЕСПЛАТНО доставим в приделах МКАД любой заказ <span>от 5 000 ₽.</span> Заказы свыше <span>30 000 ₽</span> имеют бесплатную доставку, включительно 15 км от МКАД
                </p>
              </div>
              <div className="payment__card">
                <p className="payment__card_title">Самовывоз</p>
                <p className="payment__card_desc">
                  Любой заказ можно забрать самостоятельно по адресу: г. Москва,       Дмитровское шоссе д.100с2
                </p>
              </div>
            </div>
          </div>
          <div className="payment__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1731339213171!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Payment) 