import React, { memo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Header.scss"
import logo from "../../assets/logo (8).svg"
import { MdSegment } from "react-icons/md";
import { RiMenu2Fill, RiBarChartGroupedLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <header className='header'>
            <div className="container">
                <nav className="navbar">
                    {
                        show &&
                        <div onClick={() => setShow(false)} className="navbar__overlay"></div>
                    }
                    <div className={`navbar__top ${show ? "show" : ""}`}>
                        <ul className="navbar__top_collection">
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <NavLink to={"/about"}>
                                    <span>О компании</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <NavLink to={"/payment"}>
                                    <span>Доставка и оплата</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <NavLink to={"/return"}>
                                    <span>Возврат</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <NavLink to={"/garant"}>
                                    <span>Гарантии</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <NavLink to={"/contact"}>
                                    <span>Контакты</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <NavLink to={"/blog"}>
                                    <span>Блог</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar__top_collection">
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <strong>8 (800) 890-46-56</strong>
                            </li>
                            <li onClick={() => setShow(false)} className="navbar__top_item">
                                <span>Заказать звонок</span>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__body">
                        <div onClick={() => setShow(true)} className="navbar__body_menu">
                            <MdSegment />
                        </div>
                        <div className="navbar__body_logo">
                            <NavLink to={"/"} className="logo">
                                <div>
                                    <img src={logo} alt="" />
                                </div>
                                <p className='logo__title'>NORNLIGHT</p>
                            </NavLink>
                        </div>
                        <div className="navbar__body_btn">
                            <button>
                                <RiMenu2Fill />
                                Каталог
                            </button>
                        </div>
                        <div className="navbar__body_inp">
                            <input type="search" placeholder='Поиск по товарам' />
                            <IoIosSearch />
                        </div>
                        <div className="navbar__body_addition">
                            <NavLink to={"/favorite"}>
                                <div className="navbar__body_icon">
                                    <FaRegHeart />
                                    <span>Избранное</span>
                                </div>
                            </NavLink>
                            <div className='navbar__body_icon cl'>
                                <RiBarChartGroupedLine />
                                <span> Сравнение</span>
                            </div>
                            <NavLink to={"/basket"}>
                                <div className="navbar__body_icon">
                                    <FiShoppingCart />
                                    <span>Корзина</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default memo(Header) 