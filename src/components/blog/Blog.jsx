import React, { memo } from 'react'
import "./Blog.scss"
import { GoArrowUpRight } from "react-icons/go";
import img1 from "../../assets/blog.png"
import img2 from "../../assets/blog2.png"
import img3 from "../../assets/blog3.png"
import { NavLink } from 'react-router-dom';


const Blog = () => {
    return (
        <>
            <section className='blog'>
                <div className="container">
                    <div className='blog__title'>
                        <p>Блог</p>
                        <NavLink to={"/blog"}>
                            <button>Перейти в блог</button>
                        </NavLink>
                    </div>
                    <div className="blog__wrapper">
                        <div className="blog__card">
                            <div className="blog__card_img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="blog__card_title">
                                <p>
                                    Как правильно освещать дом снаружи?
                                </p>
                                <GoArrowUpRight />
                            </div>
                            <p className="blog__card_data">
                                01.01.2024
                            </p>
                        </div>
                        <div className="blog__card">
                            <div className="blog__card_img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="blog__card_title">
                                <p>
                                    Как правильно освещать дом снаружи?
                                </p>
                                <GoArrowUpRight />
                            </div>
                            <p className="blog__card_data">
                                01.01.2024
                            </p>
                        </div>
                        <div className="blog__card">
                            <div className="blog__card_img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="blog__card_title">
                                <p>
                                    Как правильно освещать дом снаружи?
                                </p>
                                <GoArrowUpRight />
                            </div>
                            <p className="blog__card_data">
                                01.01.2024
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='info'>
                <div className="container">
                    <div className="info__wrapper">
                        <p className="info__title">
                            Производство светильников
                        </p>
                        <div className="info__desc">
                            <p>
                                Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                            </p>
                            <p>
                                Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default memo(Blog) 