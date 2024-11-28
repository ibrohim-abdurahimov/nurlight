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
import Favorite from '../pages/favorite/Favorite'
import Basket from '../pages/basket/Basket'
import Admin from '../pages/admin/Admin'
import CreateProduct from '../pages/admin/create-product/CreateProduct'
import ManageProduct from '../pages/admin/manage-product/ManageProduct'


const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/return' element={<Return />} />
                    <Route path='/garant' element={<Garant />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/favorite' element={<Favorite />} />
                    <Route path='/basket' element={<Basket />} />
                    <Route path='/product/:id' element={<Detail />} />
                </Route>
                <Route path='*' element={<NotFound />} />
                <Route path='/admin' element={<Admin />} >
                    <Route path='create-product' element={<CreateProduct/>}/>
                    <Route path='manage-product' element={<ManageProduct/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Router