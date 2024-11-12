import React from 'react'
import "./Products.scss"
import img from "../../assets/products.png"
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";



const Products = () => {
    return (
        <section className='products'>
            <div className="container">
                <div className='products__title'>
                    <p>Популярные товары</p>
                    <button>Все товары</button>
                </div>
                <div className="products__wrapper">
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    <div className="products__card">
                        <div className="products__card_img">
                            <img src={img} alt="" />
                        </div>
                        <div className='products__card_like'>
                            <CiHeart />
                        </div>
                        <p className="products__card_title">
                            Встраиваемый светильник Novotech
                        </p>
                        <p className="products__card_lastprice">
                            7 000₽
                        </p>
                        <div className="products__card_price">
                            <p>6 399₽</p>
                            <button>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products