import React, { memo, useEffect } from 'react'
import "./Detail.scss"
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/UseFetch'
import { HiMiniMinusSmall, HiMiniPlusSmall } from 'react-icons/hi2'
import { FaRegHeart } from 'react-icons/fa6'
import site from "../../assets/site.svg"

const Detail = () => {
    const {id} = useParams()
    const {data,loading,error} = useFetch(`/products/${id}`)
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    
  return (
    <div>
        <section className='detail'>
            <div className="container">
                <div className="detail__wrapper">
                    <div className="detail__image">
                        <img src={data?.img} alt="" />
                    </div>
                    <div className="detail__text">
                        <h4 className="detail__title">
                            {data?.title}
                        </h4>
                        <div className="detail__address">
                            <div className="detail__address_text">
                                <p className="detail__address_city">Scott</p>
                                <p className="detail__address_street">Артикул : 7655-18p</p>
                                <p className="detail__address_payment">В наличии</p>
                            </div>
                            <div className="detail__address_img">
                                <img src={site} alt="" />
                            </div>
                        </div>
                        <div className="detail__price">
                            <h4>{data?.price} USD</h4>
                            <p>{data?.lastprice} USD</p>
                        </div>
                        <p className="detail__desc">{data?.desc}</p>
                        <div className="detail__btn">
                            <div className="detail__number">
                                <div className="detail__number_dec">
                                    <HiMiniMinusSmall/>
                                </div>
                                <p className="detail__number_num">1</p>
                                <div className="detail__number_inc">
                                    <HiMiniPlusSmall/>
                                </div>
                            </div>
                            <button>В корзину</button>
                            <div className="detail__btn_like">
                                <FaRegHeart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default memo(Detail) 