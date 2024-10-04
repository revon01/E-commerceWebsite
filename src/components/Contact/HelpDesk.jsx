import React from 'react'
import Data from '../../utils/Data.json'
import '../../styles/HelpDesk.css'

function HelpDesk() {
    const {HelpDesk}=  Data
  return (
    <div className='help-desk'>
        <div>
        <h2>Browse our help desk</h2>
        </div>
        <div className='main-container-div'>
       
            <div className='help-desk-item'>
                <img src={HelpDesk.image1} alt=""/>
                <h3>Size Guide</h3>
                <p>Ensure your customers get the right fit</p>
                 <p>View More</p>
                 </div>

             <div className='help-desk-item'>
                <img src={HelpDesk.image2} alt=""/>
                <h3>Loyalty Program</h3>
                <p>Offer exclusive rewards</p>
                 <p>View More</p>
                 </div>
                 <div className='help-desk-item'>
                <img src={HelpDesk.image3} alt=""/>
                <h3>Order & Shipping</h3>
                <p>Looking for your order status</p>
                 <p>View More</p>
                 </div>

                 <div className='help-desk-item'>
                <img src={HelpDesk.image4} alt=""/>
                <h3>Payment & Gift cards</h3>
                <p>Wonder of what payment we accept?</p>
                 <p>View More</p>
                 </div>

                 <div className='help-desk-item'>
                <img src={HelpDesk.image5} alt=""/>
                <h3>Discount Codes</h3>
                <p>Have a discount you like to use?</p>
                 <p>View More</p>
                 </div>

                 <div className='help-desk-item'>
                <img src={HelpDesk.image6} alt=""/>
                <h3>Store Location</h3>
                <p>Want to find a store near you?</p>
                 <p>View More</p>
                 </div>
                 

 


        </div>
      
    </div>
  )
}

export default HelpDesk


