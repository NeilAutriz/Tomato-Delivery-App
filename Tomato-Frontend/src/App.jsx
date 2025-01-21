import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import CartPage from './pages/Cart/CartPage'
import PlaceOrderPage from './pages/PlaceOrder/PlaceOrderPage'


function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<PlaceOrderPage />} />
      </Routes>
    </div>
  )
}

export default App
