import React, { useState } from 'react';
import Data from '../../utils/Data.json'; 
import '../../styles/SubscribeSection.css'; 

const SubscribeSection = () => {
  const [email, setEmail] = useState(''); 
  const productImage =Data.main.buttonImage; 


  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
   setEmail('');
  console.log(email); 
  };

  return (
    <div className="subscribe-container">
    
     <div className='subscribe-image'>  
      <div>
        <img src={productImage} alt="" />
      </div>
    </div>

    <div className="subscribe-content">
        <h1>𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗡𝗼𝘄 <br/>𝗮𝗻𝗱 𝗘𝗻𝗷𝗼𝘆 𝘁𝗵𝗲 𝗣𝗲𝗿𝗸𝘀</h1>
        <p>
          Join our community of coffee enthusiasts and be the first <br/>to know about new arrivals, special offers, and more!
        </p>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            className="email-input"
            value={email} 
            onChange={handleInputChange} 
            
          />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
      </div>


    </div>
  );
};

export default SubscribeSection;

