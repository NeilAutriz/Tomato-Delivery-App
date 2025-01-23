import React, { useContext } from 'react'
import './CartPage.css'
import { StoreContext } from '../../context/StoreContext'

const CartPage = () => {
  const {cartContainer, removeCart, food_list} = useContext(StoreContext)

  return (
    <div className='cart-main-container'>
      <div className="cart-table-layout">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='table-separator'/>
      {food_list.map((item, index) => {
        if (cartContainer[item._id] > 0) {
          return (
            <>
            <div className='cart-table-layout indiv-layout-item'> 
              <div className="image-container-item">
                <img src={item.image} className='cart-item-image' />
              </div>
              <p className='cart-item-detail'>{item.name}</p>
              <p className='cart-item-detail'>${item.price}</p>
              <p className='cart-item-detail'>{cartContainer[item._id]}</p>
              <p className='cart-item-detail'>${cartContainer[item._id] * item.price}</p>
              <div className="remove-container">
                <span className='remove-item-x' onClick={() => removeCart(item._id)}>
                  X
                </span>
              </div>  
            </div>
            <hr className='table-separator'/>
          </>
          )
        }
      })}

      <div className="bottom-cart-container">
        <div className="cart-total-container">
          <div className="total-components">
            <h2>Cart Totals</h2>
            <div className="sub-del-container">
              <div className="subtotal-container">
                <p>Subtotal</p>  
                <p>{0}</p>
              </div>
              <hr />
              <div className="delfee-container">
                <p>Delivery Fee</p>
                <p>{1}</p>
              </div>
              <hr />

            </div>
          </div>
          <div className="total-price-display">
            <p>Total</p>
            <p>${0}</p>
          </div>
          <div className="button-container">
            <button className='checkout-button'>PROCEED TO CHECKOUT</button>
          </div>
        </div>

        <div className='coupon-section-container'>
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code-container">
            <input type='text' className='coupon-input' placeholder='Enter promo code' />
            <button className='submit-coupon-button'> Submit</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default CartPage
