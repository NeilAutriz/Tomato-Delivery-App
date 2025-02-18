import React from 'react'
import '../AddPage/AddPage.css'
import { assets } from '../../assets/admin_assets/assets.js'
  
const AddPage = () => {
  return (
    <div className='admin-add-container'>
      <form className='admin-add-form'>
        
        <div className="upload-image-container form-container-component">
          <label htmlFor="image">
            Upload Image
            <img src={assets.upload_area} className='file-upload-image' />
          </label>
          <input type='file' id="image" className='file-upload' hidden required/>
        </div>

        <div className='product-name-container form-container-component'>
          <label htmlFor='product-name'>Product Name</label>
          <input type="text" className='product-name-input' placeholder='Type here' id='product-name'required/>
        </div>

        <div className="product-description-container form-container-component">
          <label htmlFor='product-description'>Product Description</label>
          <textarea type='text' className='product-description-input'required placeholder='Write product description'/>
        </div>

        

        <div className="product-category-price-container ">
          <div className="product-category-container">
            <label htmlFor='food-category'>Product Category</label>
            <select name='food-category' className='food-category-input'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Vegetable">Pure Vegetable</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="product-price-container">
            <label htmlFor='food-price'>Product Price</label>
            <input type='number' className='food-price-input' required placeholder='$0'/>
          </div>
        </div>
        <button type='submit' className='submit-button'> ADD BUTTON </button>
      </form>
    </div>
  )
}

export default AddPage;
