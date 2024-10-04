import React from 'react';
import '../../styles/Footer.css';
import Data from '../../utils/Data.json'; 

const Footer = () => {
  const { footerImage } = Data;

  return (
    <div>
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">
       
          <div className="footer-l">
            <img   className="footer-logo-img" src={footerImage.logo} alt="Logo"  />
            <p>Email: info@ecomposershop.com</p>
            <p>Phone: (212) 555-1234</p>
             </div>

        <div className="footer-down">
            <p>Sign up for sale, new arrivals & more</p>
            <div className="subscription-form">
              <input type="email" placeholder="Email address" />
              <button className="subscribe-button">Sign Up</button>
            </div>
          </div>

          </div>

         
          <div className="footer-right">
            <div className="footer-columns">
              <div className="footer-column">
                <h3>About Us</h3>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Affiliate</li>
                  <li>Contact Us</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Resource</h3>
                <ul>
                  <li>Return Policy</li>
                  <li>My Account</li>
                  <li>Find a Store</li>
                  <li>Legal & Privacy</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Information</h3>
                <ul>
                  <li>Our Story</li>
                  <li>Visit Our Store</li>
                  <li>Contact Us</li>
                  <li>Account</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Help</h3>
                <ul>
                  <li>FAQ</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
            </div>
     

</div>
      
        
    </footer>


    <div className='bottom-heading'>
     
       <div className="footer-bottom">
          <p>© 2024 EComposer Store. All Rights Reserved.</p>
        </div>
        <div className="payment-methods">
        <img  src={footerImage.paymentModes} />
       </div>
        </div>
      </div>
  );
};

export default Footer;

