import React, { useEffect, useState } from 'react'
import "./Products.scss"
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import axios from '../../api';
import Loading from '../loading/Loading';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useFetch } from '../../hooks/UseFetch';
import { Link } from 'react-router-dom';




const Products = () => {
    // const [products, setProducts] = useState(null)
    // const [loading, setLoading] = useState(false)
    const {data,error,loading} = useFetch('/products')
    useEffect(()=>{
        Aos.init()
    },[])
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
            <div className="products__card_img">
            <Link to={`/product/${pro.id}`}>
                <img src={pro.img} alt="" />
            </Link>
            </div>
            <div className='products__card_like'>
                <CiHeart />
            </div>
            <p className="products__card_title">
                {pro.title}
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
                {loading && <Loading/>}
                <div className="products__wrapper">
                    {productItems}
                </div>
            </div>
        </section>
    )
}

export default Products