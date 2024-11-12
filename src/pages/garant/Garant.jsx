import React from 'react'
import "./Garant.scss"
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Garant = () => {
    return (
        <>
            <section className='garant'>
                <div className="container">
                    <ul className="garant__collection">
                        <li className="garant__item">
                            <NavLink to={"/"}>
                                <span className='home'>Главная</span>
                            </NavLink>
                        </li>
                        <li className='garant__item'>
                            <MdKeyboardArrowRight />
                        </li>
                        <li className="garant__item">
                            <NavLink to={"/gar3ant"}>
                                <span>Гарантии</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="garant__wrapper">
                        <h4 className="garant__title">Гарантии</h4>
                        <div className="garant__text">
                            <h4 className="garant__text_title">
                                Обмен и возврат по желанию покупателя
                            </h4>
                            <p className="garant__text_desc">
                                Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
                                Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                            </p>
                            <ul className="garant__text_collection">
                                <li className="garant__text_item">
                                    Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа
                                </li>
                                <li className="garant__text_item">
                                    Привезти товар к нам на склад или отправить его транспортной компанией.
                                </li>
                                <li className="garant__text_item">
                                    После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.
                                </li>
                            </ul>
                            <p className="garant__text_desc">
                                Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.
                                Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Garant