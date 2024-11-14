import React, { memo } from 'react'
import "./NotFound.scss"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='nofound'>
        <div className="container">
          <h2>404</h2>
          <p>Похоже, ничего не нашлось :(</p>
          <button onClick={()=> navigate("/")}>На главную</button>
          <button onClick={()=> navigate(-1)}>Возвращаться</button>
        </div>
      </section>
    </>
  )
}

export default memo(NotFound) 