import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import CartPage from './pages/Cart/CartPage'
import PlaceOrderPage from './pages/PlaceOrder/PlaceOrderPage'
import Footer from './components/Footer/Footer'
import SignIn from './components/Signin/SignIn'

function App() {

  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className='main-container'>
      {showSignIn == true ? <SignIn setShowSignIn={setShowSignIn} /> : <></>}
      <Navbar setShowSignIn={setShowSignIn} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<PlaceOrderPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
