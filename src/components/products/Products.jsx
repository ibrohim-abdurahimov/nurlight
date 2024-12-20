import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "./Products.scss"
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import axios from '../../api';
import Loading from '../loading/Loading';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useFetch } from '../../hooks/UseFetch';
import { Link } from 'react-router-dom';
import Model from '../model/Model';


import { EffectCube, Pagination } from 'swiper/modules';
import { useStateValue } from '../../context';

const Products = ({ data, loading, admin }) => {
    // const [products, setProducts] = useState(null)
    // const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const [state, dispatch] = useStateValue()

    // const { data, error, loading } = useFetch('/products')
    const deleteProduct = (id)=>{
        axios
            .delete(`/products/${id}`)
            .then(res=> {
                console.log(res)
                dispatch({type: "RELOAD"})
                // window.location.reload()
            })
            .catch(res=> console.log(res))
            .finally(res=> console.log(res))
    }
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
            <div className="products__card_header">
                <div onClick={() => setItem(pro)} className="products__card_img">
                    <img src={pro.img} alt="" />
                </div>
                <div onClick={() => dispatch({ type: "ADD_WISHLIST", payload: pro })} className='products__card_like'>
                    {
                        state.wishlist?.some(i => i.id === pro.id)
                            ?
                            <FaHeart />
                            :
                            <FaRegHeart style={{ color: 'black' }} />
                    }
                </div>
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
                {
                    admin ?
                        <button onClick={()=> deleteProduct(pro.id)}>
                            <FaTrashCan />
                        </button>
                        :
                        <button
                            disabled={pro.stock <= state.cart.find(i => i.id === pro.id)?.amount}
                            onClick={() => dispatch({ type: "ADD_CART", payload: pro })}>
                            <IoCartOutline />
                        </button>

                }
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