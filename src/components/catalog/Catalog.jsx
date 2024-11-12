import React, { memo } from 'react'
import "./Catalog.scss"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import card1 from "../../assets/category card1.png"
import card2 from "../../assets/category card2.png"
import card3 from "../../assets/category card3.png"
import card4 from "../../assets/category card4.png"
import card5 from "../../assets/category card5.png"
import card6 from "../../assets/category card6.png"

const Catalog = () => {
    return (
        <section className='catalog'>
            <div className="container">
                <div className='catalog__title'>
                    <p>Каталог</p>
                    <button>Весь каталог</button>
                </div>
                <div className="catalog__wrapper">
                    <div className="catalog__card">
                        <div className="catalog__card_text">
                            <p className='catalog__card_title'>Люстры</p>
                        <div className="catalog__card_img">
                            <div className='sp'></div>
                            <div className='catalog__img'>
                                <img src={card1} alt="" />
                            </div>
                        </div>
                        </div>
                        <div className='catalog__card_price'>
                            <p>От 540₽</p>
                            <MdOutlineArrowRightAlt />
                         </div>
                    </div>
                    <div className="catalog__card">
                        <div className="catalog__card_text">
                            <p className='catalog__card_title'>Светильники</p>
                            <div className="catalog__card_img">
                                <div className="sp"></div>
                                <div className="catalog__img">
                                    <img src={card2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='catalog__card_price'>
                            <p>От 540₽</p>
                            <MdOutlineArrowRightAlt />
                        </div>
                    </div>
                    <div className="catalog__card">
                        <div className="catalog__card_text">
                            <p className='catalog__card_title'>Бра</p>
                            <div className="catalog__card_img">
                                <div className="sp"></div>
                                <div className="catalog__img">
                                    <img src={card3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='catalog__card_price'>
                            <p>От 540₽</p>
                            <MdOutlineArrowRightAlt />
                        </div>
                    </div>
                    <div className="catalog__card">
                        <div className="catalog__card_text">
                            <p className='catalog__card_title'>Торшеры</p>
                            <div className="catalog__card_img">
                                <div className="sp"></div>
                                <div className="catalog__img">
                                    <img src={card4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='catalog__card_price'>
                            <p>От 540₽</p>
                            <MdOutlineArrowRightAlt />
                        </div>
                    </div>
                    <div className="catalog__card">
                        <div className="catalog__card_text">
                            <p className='catalog__card_title'>Настольные лампы</p>
                            <div className="catalog__card_img">
                                <div className="sp"></div>
                                <div className="catalog__img">
                                    <img src={card5} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='catalog__card_price'>
                            <p>От 540₽</p>
                            <MdOutlineArrowRightAlt />
                        </div>
                    </div>
                    <div className="catalog__card">
                        <div className="catalog__card_text">
                            <p className='catalog__card_title'>Споты</p>
                            <div className="catalog__card_img">
                                <div className="sp"></div>
                                <div className="catalog__img">
                                    <img src={card6} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='catalog__card_price'>
                            <p>От 540₽</p>
                            <MdOutlineArrowRightAlt />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Catalog) 