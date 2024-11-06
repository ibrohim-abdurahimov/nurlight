import React from 'react'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <Footer />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout