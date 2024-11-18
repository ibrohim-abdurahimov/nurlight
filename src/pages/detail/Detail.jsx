import React, { memo, useEffect } from 'react'
import "./Detail.scss"
import { NavLink, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/UseFetch'
import { HiMiniMinusSmall, HiMiniPlusSmall } from 'react-icons/hi2'    
import { FaRegHeart, FaHeart } from "react-icons/fa";
import site from "../../assets/site.svg"
import { useStateValue } from '../../context'

const Detail = () => {
    const { id } = useParams()
    const { data, loading, error } = useFetch(`/products/${id}`)
    const [state, dispatch] = useStateValue()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <section className='detail'>
                <div className="container">
                    <ul className="detail__collection">
                        <li className="detail__item">
                            <NavLink to={-1}>
                                <span className='home'>Главная</span>
                            </NavLink>
                        </li>
                    </ul>
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
                                        <HiMiniMinusSmall />
                                    </div>
                                    <p className="detail__number_num">1</p>
                                    <div className="detail__number_inc">
                                        <HiMiniPlusSmall />
                                    </div>
                                </div>
                                <button>В корзину</button>
                                <div onClick={() => dispatch({ type: "ADD_WISHLIST", payload: data })} className="detail__btn_like">
                                    {
                                        state.wishlist?.some(i => i.id === id)
                                            ?
                                            <FaHeart />
                                            :
                                            <FaRegHeart style={{ color: 'black' }} />
                                    }
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