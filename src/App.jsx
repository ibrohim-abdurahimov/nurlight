import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Payment from './pages/payment/Payment'
import Layout from './pages/layout/Layout'
import NotFound from './pages/not-found/NotFound'

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
