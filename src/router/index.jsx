import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Payment from '../pages/payment/Payment'
import NotFound from '../pages/not-found/NotFound'
import Return from '../pages/return/Return'
import Garant from '../pages/garant/Garant'
import Contact from '../pages/conacts/Contact'
import Blog from '../pages/blog/Blog'
import Detail from '../pages/detail/Detail'


const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/return' element={<Return />} />
                    <Route path='/garant' element={<Garant />} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/blog' element={<Blog/>} />
                    <Route path='/product/:id' element={<Detail/>} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Router