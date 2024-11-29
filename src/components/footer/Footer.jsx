import React, { memo } from 'react'
import "./Footer.scss"
import logo from "../../assets/logo (8).svg"
import img from "../../assets/footerimg.png"
import vk from "../../assets/vk.svg"
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__card">
            <NavLink to={"/"}>
              <div className="footer__card_logo">
                <div>
                  <img src={logo} alt="" />
                </div>
                <p>NORNLIGHT</p>
              </div>
            </NavLink>
            <p className="footer__card_num">
              8 (800) 890-46-56
            </p>
            <div className="footer__card_img">
              <img src={img} alt="" />
            </div>
            <p className="footer__card_policy">
              Политика конфидециальности
            </p>
            <p className="footer__card_agreement">
              Пользовательское соглашение
            </p>
            <div className="footer__card_vk">
              <div>
                <img src={vk} alt="" />
              </div>
              <div>
                <img src={vk} alt="" />
              </div>
              <div>
                <img src={vk} alt="" />
              </div>
            </div>
          </div>
          <div className="footer__card">
            <p className="footer__card_title">
              Покупателям
            </p>
            <ul className="footer__card_collection">
              <li className="footer__card_item">
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
                <NavLink to={"/return"}>
                  <span>Возврат</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/garant"}>
                  <span>Гарантии</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  <span>Контакты</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>
                  <span>Блог</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__card">
            <p className="footer__card_title">Товары</p>
            <div className="footer__card_wrapper">
              <ul className="footer__card_collection">
                <li>
                  <a href="#">
                    <span>Люстры</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Светильники</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Бра</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Торшеры</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Комплектуюшие</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Настольные лампы</span>
                  </a>
                </li>
              </ul>
              <ul className="footer__card_collection">
                <li>
                  <a href="#">
                    <span>Споты</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Трековые светильники</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Уличные светильники</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Технические светильники</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Светодиодные ленты</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer) 