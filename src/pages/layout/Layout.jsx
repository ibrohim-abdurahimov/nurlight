import React, { memo } from 'react'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'


const Layout = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default memo(Layout) 