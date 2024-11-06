import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Header.scss"
import logo from "../../assets/logo (8).svg"
import { MdSegment } from "react-icons/md";
import { RiMenu2Fill, RiBarChartGroupedLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__top">
                        <ul className="navbar__top_collection">
                            <li className="navbar__top_item">
                                <NavLink to={"/about"}>
                                    <span>О компании</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/payment"}>
                                    <span>Доставка и оплата</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <span>Возврат</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <span>Гарантии</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <span>Контакты</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <span>Блог</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar__top_collection">
                            <li className="navbar__top_item">
                                <strong>8 (800) 890-46-56</strong>
                            </li>
                            <li>
                                <span>Заказать звонок</span>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__body">
                        <div className="navbar__body_menu">
                            <MdSegment />
                        </div>
                        <div className="navbar__body_logo">
                            <NavLink to={"/"} className="logo">
                                <img src={logo} alt="" />
                                <p>NORNLIGHT</p>
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
                        <div className="navbar__body_like">
                            <FaRegHeart />
                            Избранное
                        </div>
                        <div className='navbar__body_comparison'>
                            <RiBarChartGroupedLine />
                            Сравнение
                        </div>
                        <div className="navbar__body_basket">
                            <FiShoppingCart />
                            Корзина
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header