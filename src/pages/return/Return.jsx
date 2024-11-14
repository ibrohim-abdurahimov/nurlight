import React, { memo, useEffect } from 'react'
import "./Return.scss"
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Return = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
    return (
        <>
            <section className='return'>
                <div className="container">
                    <ul className="return__collection">
                        <li className="return__item">
                            <NavLink to={"/"}>
                                <span className='home'>Главная</span>
                            </NavLink>
                        </li>
                        <li className='return__item'>
                            <MdKeyboardArrowRight />
                        </li>
                        <li className="return__item">
                            <NavLink to={"/return"}>
                                <span>Возврат</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="return__wrapper">
                        <div className="return__title">
                            Возврат
                        </div>
                        <div className="return__text">
                            <div className="return__card">
                                <h4 className="return__card_title">
                                    Обмен и возврат по желанию покупателя
                                </h4>
                                <p className="return__card_desc">
                                    Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:
                                </p>
                                <ul className="return__card_collection">
                                    <li className="return__card_item">
                                        Товар имеет первоначальный вид, имеется товарная кондиция;
                                    </li>
                                    <li className="return__card_item">
                                        Товар имеет полную комплектацию, включая упаковочные материалы;
                                    </li>
                                    <li className="return__card_item">
                                        Товар не имеет следов подключался и не имеет признаков монтажа;
                                    </li>
                                    <li className="return__card_item">
                                        Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;
                                    </li>
                                    <li className="return__card_item">
                                        Есть документ, подтверждающий покупку в нашем интернет-магазине.
                                    </li>
                                    <li className="return__card_item">
                                        Для возврата товара необходимо привезти его к нам в офис.
                                    </li>
                                    <li className="return__card_item">
                                        Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.
                                    </li>
                                    <li className="return__card_item">
                                        *В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера
                                    </li>
                                </ul>
                            </div>
                            <div className="return__card">
                                <h4 className="return__card_title">
                                    Обмен и возврат по ошибке продавца
                                </h4>
                                <p className="return__card_desc">
                                    Причины обмена или возврата по ошибке продавца:
                                </p>
                                <ul className="return__card_collection">
                                    <li className="return__card_item">
                                        Неполная комплектация товара
                                    </li>
                                    <li className="return__card_item">
                                        Брак или дефект товара
                                    </li>
                                    <li className="return__card_item">
                                        Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/
                                    </li>
                                    <li className="return__card_item">
                                        Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно
                                    </li>
                                </ul>
                            </div>
                            <div className="return__card">
                                <h4 className="return__card_title">
                                    Возврат денежных средств
                                </h4>
                                <p className="return__card_desc">
                                    Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Return)