import React, { memo, useEffect } from 'react'
import './About.scss'
import Brands from '../../components/brands/Brands'
import Blog from '../../components/blog/Blog'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";



const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <section className='about'>
        <div className="container">
          <ul className="about__collection">
            <li className="about__item">
              <NavLink to={"/"}>
                <span className='home'>Главная</span>
              </NavLink>
            </li>
            <li className='about__item'>
              <MdKeyboardArrowRight />
            </li>
            <li className="about__item">
              <NavLink to={"/about"}>
                <span>О компании</span>
              </NavLink>
            </li>
          </ul>
          <div className="about__wrapper">
            <div className="about__card">
              <p className="about__card_title">
                О компании
              </p>
              <div className='about__card_wrapper'>
                <div className="about__card_info">
                  <h4>170+ </h4>
                  <p>Товаров</p>
                </div>
                <div className="about__card_info">
                  <h4>1000+  </h4>
                  <p>Довольных покупателей</p>
                </div>
                <div className="about__card_info">
                  <h4>170+ </h4>
                  <p>Товаров</p>
                </div>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card_desc">
                <p>
                  Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                </p>
                <p>
                  Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
                <p>
                  Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                </p>
                <p>
                  Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <Blog />
    </>
  )
}

export default memo(About) 