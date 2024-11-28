import React, { useEffect, useRef } from 'react'
import "./Basket.scss"
import { useStateValue } from '../../context'
import { useFetch } from '../../hooks/UseFetch'
import Loading from '../../components/loading/Loading'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiDeleteBin6Line } from "react-icons/ri";

const BOT_TOKEN = "7471492435:AAEkJ1FCr5w-KDpR3r5Y2DQITtwMT9H5ERI"
const CHAT_ID = -1002495081236
const USER_ID = 813134057
// https://api.telegram.org/bot7471492435:AAEkJ1FCr5w-KDpR3r5Y2DQITtwMT9H5ERI/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Basket = () => {
  const [state, dispatch] = useStateValue()
  const { data, error, loading } = useFetch('/basket')
  const fname = useRef(null)
  const tel = useRef(null)
  const email = useRef(null)
  const address = useRef(null)
  const comment = useRef(null)
  console.log(fname.current);
  const handleSubmit = (e) => {
    e.preventDefault()

    let text = ""
    text += `<b>Buyurtma: %0A%0A </b>`

    text += `Name: ${fname.current.value} %0A`
    text += `Tel: ${tel.current.value} %0A`
    text += `Email: ${email.current.value} %0A`
    text += `Address: ${address.current.value} %0A%0A`
    text += `Comment: ${comment.current.value} %0A%0A`

    state?.cart.forEach((pro) => {
      text += `Title: ${pro.title} %0A`
      text += `Amount: ${pro.amount} %0A`
      text += `Price: ${pro.price} %0A%0A`
    })
    text += `<b>Total: ${state.cart?.reduce((sum, item) => sum + item.price * item.amount, 0)} USD %0A</b>`
    text += `Delivery: ${50} USD`

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
    const api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {
        state.cart.length ?
          <section className='basket'>
            <div className="container">
              <ul className="basket__collection">
                <li className="basket__item">
                  <NavLink to={"/"}>
                    <span className='home'>Главная</span>
                  </NavLink>
                </li>
                <li className='basket__item'>
                  <MdKeyboardArrowRight />
                </li>
                <li className="basket__item">
                  <NavLink to={"/basket"}>
                    <span> Корзина</span>
                  </NavLink>
                </li>
              </ul>
              <h2 className='basket__title'>Корзина</h2>
              <div className="basket__wrapper">
                <div className="basket__card_title">
                  <p>Фото</p>
                  <p>Товары</p>
                  <p>Описание</p>
                  <p>Количество</p>
                </div>

                {loading && <Loading />}
                {
                  state?.cart?.map((item) => (
                    <>
                      <div key={item.id} className="basket__card">
                        <div className="basket__card_img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="basket__card_subtitle">
                          <h3>{item.title}</h3>
                          <p className='basket__card_price'>{item.price}*{item.amount}={item.price * item.amount} USD</p>
                        </div>
                        <div className="basket__card_description">
                          <p>{item.desc}</p>
                        </div>
                        <div className="basket__card_cal">
                          <div className="basket__card_btn">
                            <button
                              disabled={item.amount <= 1}
                              onClick={() => dispatch({ type: "DEC_CART", payload: item })}>-</button>
                            <span>{item.amount}</span>
                            <button
                              disabled={item.stock <= item.amount}
                              onClick={() => dispatch({ type: "ADD_CART", payload: item })}>+</button>
                          </div>
                          <div className="basket__card_del">
                            <button onClick={() => dispatch({ type: "REMOVE_CART", payload: item })}><RiDeleteBin6Line />
                            </button>
                          </div>
                        </div>


                      </div>
                    </>
                  ))
                }

              </div>
              <div className='design'>
                <div className="design__card">
                  <h3 className="design__card_title">Оформление</h3>
                  <div className="design__card_inp">
                    <form action="" className='design__card_info'>
                      <input ref={fname} type="text" placeholder='ФИО' />
                      <input ref={tel} type="tel" placeholder='Телефон' />
                      <input ref={email} type="email" placeholder='Электронная почта' />
                      {/* <button>ss</button> */}
                    </form>
                  </div>
                </div>
                <hr />
                <div className="design__card">
                  <h3 className="design__card_title">Доставка</h3>
                  <div className="design__card_inp">
                    <form action="" className='design__card_address'>
                      <input ref={address} type="text" placeholder='Адрес доставки' />
                      <textarea ref={comment} name="Комментарий" placeholder='Комментарий' cols="" rows="7" id=""></textarea>
                    </form>
                  </div>
                </div>
              </div>
              <div className="payment">
                <h3 className="payment__title">Оплата</h3>
                <div className="payment__price">
                  <div className="payment__price_card">
                    <p>Товары.............................................</p>
                    <p>{state.cart?.reduce((sum, item) => sum + item.price * item.amount, 0)} USD</p>
                  </div>
                  <div className="payment__price_card">
                    <p>Доставка..............................................</p>
                    <p>{50} USD</p>
                  </div>
                </div>
                <h3 className='payment__total'>{state.cart?.reduce((sum, item) => sum + item.price * item.amount + 50, 0)} USD</h3>
                <form className="payment__btn" onSubmit={handleSubmit} action="">
                  <button>Купить</button>
                  <div className="payment__checkbox">
                    <input required type="checkbox" />
                    <p>Я согласен наобработку моих персональных данных</p>
                  </div>

                </form>
                <div >
                </div>
              </div>
            </div>
          </section>
          :
          <div className='basket'>
            <div className="container">
              <div className="basket__img">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp" alt="" />
              </div>
              <NavLink to={"/"}>
                <button className='btn'>Главная</button>
              </NavLink>
            </div>
          </div>
      }
    </>
  )
}

export default Basket