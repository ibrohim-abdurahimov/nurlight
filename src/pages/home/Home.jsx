import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Home.scss"
import { Pagination } from 'swiper/modules';
import skidka from "../../assets/skidka.png"
import hero from "../../assets/hero2 (3).png"
import card1 from "../../assets/category card1.png"
import card2 from "../../assets/category card2.png"
import card3 from "../../assets/category card3.png"
import card4 from "../../assets/category card4.png"
import card5 from "../../assets/category card5.png"
import card6 from "../../assets/category card6.png"


const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className="container2">

          <Swiper
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
                  <img src={skidka} alt="" />
                </div>
                <div className="hero__text">
                  <img src={hero} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero__wrapper'>
                <div className="hero__text">
                  <img src={skidka} alt="" />
                </div>
                <div className="hero__text">
                  <img src={hero} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero__wrapper'>
                <div className="hero__text">
                  <img src={skidka} alt="" />
                </div>
                <div className="hero__text">
                  <img src={hero} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero__wrapper'>
                <div className="hero__text">
                  <img src={skidka} alt="" />
                </div>
                <div className="hero__text">
                  <img src={hero} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className='category'>
        <div className="container">
          <div className='category__title'>
            <p>Каталог</p>
            <button>Весь каталог</button>
          </div>
          <div className="category__wrapper">
            <div className="category__card">
              <div className="category__card_text">
                <p>Люстры</p>
                <p>От 540₽</p>
              </div>
              <div className="category__card_img">
                <img src={card1} alt="" />
              </div>
            </div>
            <div className="category__card">
              <div className="category__card_text">
                <p>Люстры</p>
                <p>От 540₽</p>
              </div>
              <div className="category__card_img">
                <img src={card2} alt="" />
              </div>
            </div>
            <div className="category__card">
              <div className="category__card_text">
                <p>Люстры</p>
                <p>От 540₽</p>
              </div>
              <div className="category__card_img">
                <img src={card3} alt="" />
              </div>
            </div>
            <div className="category__card">
              <div className="category__card_text">
                <p>Люстры</p>
                <p>От 540₽</p>
              </div>
              <div className="category__card_img">
                <img src={card4} alt="" />
              </div>
            </div>
            <div className="category__card">
              <div className="category__card_text">
                <p>Люстры</p>
                <p>От 540₽</p>
              </div>
              <div className="category__card_img">
                <img src={card5} alt="" />
              </div>
            </div>
            <div className="category__card">
              <div className="category__card_text">
                <p>Люстры</p>
                <p>От 540₽</p>
              </div>
              <div className="category__card_img">
                <img src={card6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home