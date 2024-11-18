import React, { useEffect } from 'react'
import "./Favorite.scss"
import { useStateValue } from '../../context'
import Products from '../../components/products/Products'
import { useFetch } from '../../hooks/UseFetch'
import { NavLink } from 'react-router-dom'

const Favorite = () => {
  const { data, error, loading } = useFetch('/products')
  const [state, dispatch] = useStateValue()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      {
        state.wishlist.length === 0 ?
          <>
            <div className='favorite'>
              <div className="container">
                <div className='favorite__img'>
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-states-pack-design-development-illustrations-8060928.png?f=webp" alt="" />
                </div>
                <NavLink to={"/"}>
                  <button className='btn'>Главная</button>
                </NavLink>

              </div>
            </div>
            <Products data={data} loading={loading} />
          </>
          :
          <div className='container'>
            <NavLink className="favorite__item" to={"/"}>
                  <span className='home'>Главная</span>
                </NavLink>
            <Products data={state.wishlist} />
          </div>
      }
    </div>
  )
}

export default Favorite