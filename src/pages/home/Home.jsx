import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Home.scss"
import { Pagination } from 'swiper/modules';
import skidka from "../../assets/hero2 (3).png"
import skidka1 from "../../assets/hero3 (3).jpg"
import skidka2 from "../../assets/bra.jpg"
import card1 from "../../assets/brand.svg"
import card2 from "../../assets/price.svg"
import card3 from "../../assets/car.svg"
import card4 from "../../assets/product.svg"
import Catalog from '../../components/catalog/Catalog';
import Products from '../../components/products/Products';
import Brands from '../../components/brands/Brands';
import Blog from '../../components/blog/Blog';
import { useFetch } from '../../hooks/UseFetch';
import { NavLink } from 'react-router-dom';



const Home = () => {
  const { data, error, loading } = useFetch('/products')

  return (
    <>
      <section className='hero'>
        <div className="container2">

          <Swiper
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='hero__wrapper'>
                <div className="hero__text">
                  <p>Скидка 15% на все подвесные светильники <span>до 5 февраля</span></p>
                </div>
                <div className="hero__img">
                  <img src={skidka} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero__wrapper'>
                <div className="hero__text">
                  <p>Скидка 23% на все подвесные светильники <span>до 13 февраля</span></p>
                </div>
                <div className="hero__img">
                  <img src={skidka1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero__wrapper'>
                <div className="hero__text">
                  <p>Скидка 30% на все подвесные светильники <span>до 25 февраля</span></p>
                </div>
                <div className="hero__img">
                  <img src={skidka2} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Catalog />
      <section className='compony'>
        <div className="container">
          <div className='compony__title'>
            <p>Почему NORNLIGHT?</p>
            <NavLink to={"/about"}>
              <button>О компании</button>
            </NavLink>
          </div>
          <div className="compony__wrapper">
            <div className="compony__card">
              <div className="compony__card_img">
                <img src={card1} alt="" />
              </div>
              <p className="compony__card_title">
                Только проверенные бренды
              </p>
              <p className="compony__card_desc">
                Бренды, проверенные временем и качеством
              </p>
            </div>
            <div className="compony__card">
              <div className="compony__card_img">
                <img src={card2} alt="" />
              </div>
              <p className="compony__card_title">
                Самые низкие цены
              </p>
              <p className="compony__card_desc">
                Ниже не будет нигде
              </p>
            </div>
            <div className="compony__card">
              <div className="compony__card_img">
                <img src={card3} alt="" />
              </div>
              <p className="compony__card_title">
                Быстрая доствка
              </p>
              <p className="compony__card_desc">
                Доставляем по всей РФза 1-10 дней
              </p>
            </div>
            <div className="compony__card">
              <div className="compony__card_img">
                <img src={card4} alt="" />
              </div>
              <p className="compony__card_title">
                Большой ассортимент
              </p>
              <p className="compony__card_desc">
                Более 1000 товаров
              </p>
            </div>
          </div>
        </div>
      </section>
      <Products data={data} loading={loading} />
      <Brands />
      <Blog />
    </>
  )
}

export default memo(Home) 