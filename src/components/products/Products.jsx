import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "./Products.scss"
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import axios from '../../api';
import Loading from '../loading/Loading';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useFetch } from '../../hooks/UseFetch';
import { Link } from 'react-router-dom';
import Model from '../model/Model';


import { EffectCube, Pagination } from 'swiper/modules';

const Products = () => {
    // const [products, setProducts] = useState(null)
    // const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const { data, error, loading } = useFetch('/products')
    useEffect(() => {
        Aos.init()
    }, [])
    // useEffect(() => {
    //     setLoading(true)
    //     axios
    //         .get(`/products`)
    //         .then(res => {
    //             setProducts(res.data)
    //         })
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    // }, [])
    const productItems = data?.map((pro) => (
        <div data-aos="zoom-out" key={pro.id} className="products__card">
            <div onClick={() => setItem(pro)} className="products__card_img">
                <img src={pro.img} alt="" />

            </div>
            <div className='products__card_like'>
                <CiHeart />
            </div>
            <p className="products__card_title">
                <Link to={`/product/${pro.id}`}>
                    {pro.title}
                </Link>
            </p>
            <p className="products__card_lastprice">
                {pro.lastprice}
            </p>
            <div className="products__card_price">
                <p>{pro.price} USD</p>
                <button>
                    <IoCartOutline />
                </button>
            </div>
        </div>
    ))
    return (
        <section className='products'>
            <div className="container">
                <div className='products__title'>
                    <p>Популярные товары</p>
                    <button>Все товары</button>
                </div>
                {loading && <Loading />}
                <div className="products__wrapper">
                    {productItems}
                </div>
            </div>
            {
                item &&
                <Model close={setItem}>
                    <div className='products__model'>
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            loop={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            pagination={true}
                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={item?.img} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={item?.thumbnails[0]} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={item?.thumbnails[1]} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Model>
            }
        </section>
    )
}

export default Products