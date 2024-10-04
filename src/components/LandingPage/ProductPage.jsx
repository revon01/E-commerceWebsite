import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Data from '../../utils/Data.json';
import '../../styles/ProductPage.css';
import { FcRating } from "react-icons/fc";
import { MdDone } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";

import { FaAngleRight } from "react-icons/fa";
import { LuPaintBucket } from "react-icons/lu";

const ProductPage = ({id}) => {
  const [quantity, setQuantity] = useState(1); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(Data)
  const product = Data.products.find((item) => item.id === parseInt(id));
  console.log(product);


const handleAddToCart = () => {
    const productToAdd = { ...product, quantity }; 
    dispatch(addToCart(productToAdd));
       console.log(productToAdd);
      //  navigate('./Cart')
    
  };


  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
     if(value>0){
      setQuantity(value)
     }
    
   };
  
  if (!product) {
    return  <div>Product not found</div>; 
  }

  return (
    <div className="product-page">
   
      <div className="product-image-section">

        <div className="main-image">
          <img src={product.image} alt={product.title} />
           </div>

        <div className="product-buttom">
          <button className="arrow left"><FaAngleLeft /></button>
          <div className="product">
            <img src={product.image}  />
            <img src={product.image} />
            <img src={product.image}/>
          </div>
          <button className="arrow right"><FaAngleRight /></button>
        </div>
      </div>

   
      <div className="product-details-section">
        <div className="product-info">

          <div className="badges">
            <span className="rating-badge">
            <FcRating /> {product.rating.stars} over {product.rating.reviews} ratings</span>
            <span className="best-choice">Our Best Choice</span>
          </div>

          <h1 className="product-title">{product.title}</h1>


          <div className="price-section">
            <p className="current-price">${product.price.toFixed(2)}</p>
            <p className="original-price"><del>${product.originalPrice.toFixed(2)}</del></p>
            <p className="discount-badge">- {product.discountPercentage}%</p>
          </div>

          <ul className="product-features">
            {product.features.map((feature, index) => (
              <li key={index}> <MdDone />{feature}</li>
            ))}
          </ul>


          <div className="add-to-cart-section">
            <div className="quantity-selector">
             
        <input type="number" value={quantity} onChange={handleQuantityChange }/>
         </div>

            <button className="add-to-cart-button" onClick={handleAddToCart}>ADD TO CART</button>
          </div>

        
          
            <div className="related-product">
            <h3>Buy it with:</h3>
            
              <div className="related-product-info">
                <img src={Data.products[0]["buttom-image"]} alt="Related product" />
               <div className='product-content'>
                  <h4> Reusable Filter Cup</h4>
                  <p>$12.60</p>  
                </div>
                <div className='button'>
                <button className="btn">Buy Now <LuPaintBucket style={{ color: 'black', width: '25px', gap:'5' }} /></button>
                 </div>
                </div>
                </div>
        </div>
      </div>
      </div>
           
          
        

  );
};

export default ProductPage;