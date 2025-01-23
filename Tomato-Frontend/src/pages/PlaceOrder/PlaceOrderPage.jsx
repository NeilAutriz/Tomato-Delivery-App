import React from 'react'
import './PlaceOrderPage.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const PlaceOrderPage = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  
  return (
    <div className='place-order-container'>
      <div className="delivery-info-container">
        <h2>Delivery Information</h2>
        <form className='deliv-form'>
          <div className="multiple-line-detail">
            <input type='text' required placeholder='First name' className='deliv-input'/>
            <input type='text' required placeholder='Last name' className='deliv-input'/>
          </div>
          <div className="single-line-detail">
            <input placeholder='Email address' className='deliv-input' />
          </div>
          <div className="single-line-detail">
            <input placeholder='Street' type='text' className='deliv-input'/>
          </div>
          <div className="multiple-line-detail">
            <input type='text' required placeholder='City' className='deliv-input'/>
            <input type='text' required placeholder='State' className='deliv-input'/>
          </div>
          <div className="multiple-line-detail">
            <input type='text' required placeholder='Zip code' className='deliv-input'/>
            <input type='text' required placeholder='Country' className='deliv-input'/>
          </div>
          <div className="single-line-detail">
          <input type='tel' placeholder='phone' className='deliv-input' required />
          </div>

        </form>
      </div>

      <div className="cart-total-container-order">
        <div className="total-components">
              <h2>Cart Totals</h2>
              <div className="sub-del-container">
                <div className="subtotal-container-order">
                  <p>Subtotal</p>
                  <p>{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="delfee-container-order">
                  <p>Delivery Fee</p>
                  <p>{1}</p>
                </div>
                <hr />

              </div>
            </div>
            <div className="total-price-display-order">
              <p>Total</p>
              <p>${0}</p>
            </div>
            <div className="payment-container">
              <button className='payment-button' onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrderPage
