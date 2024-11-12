import React, { memo } from 'react'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default memo(Layout) 