import React from 'react'
import Data from '../../utils/Data.json'
import '../../styles/HelpCenter.css'
import { GoArrowRight } from "react-icons/go";

function HelpCenter() {
    const  {ContactUs} = Data;

  return (
    <div className='helpCenter'>
        <div className='help-Center-main'>
           <div className='help-image'>
         <img src={ContactUs.image} alt="" />
        </div>
     
        <div className='help-title'>
        <h2>HELP CENTER</h2>
        <p>Let us know how we may help you?</p>
        </div>
        <div className="help-forms">
              <input type="email" placeholder="Search for answer... " />
              <button className="subscribe-btn">Sign Up</button>
         </div>
         </div>

              <div  className='product-container'>
              <div className='products-content'>  
            <img src={ContactUs.Ordertracking} alt=""/>
                       
                  <h3>Order Tracking</h3>
            <p>Log in to check the status of your order</p>
         
            <button className='status-btn'>Track your order <span className='icon'><GoArrowRight /></span></button>
           
            </div>

            <div className='products-content'>   
            <img src={ContactUs.Return} alt=""/>
                   <h3>Return & Exchange</h3>
            <p>We make it easy to return and exchange styles.</p>
            <button className='status-btn'>Start a return  <span className='icon'><GoArrowRight /> </span></button>
            </div>

         </div>

      </div>
      
  
  )
}

export default HelpCenter

