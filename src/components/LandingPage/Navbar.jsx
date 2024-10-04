import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { FaShoppingCart } from 'react-icons/fa';
import Data from '../../utils/Data.json';
import '../../styles/Navbar.css';

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get total quantity from Redux

  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
        <img src={Data.main.logo} alt="Logo" className='logo' />
          </Link>
        </div>

        <div className='left'>
          <Link to='/LandingPage'>Landing Page</Link>
        </div>

        <div className='right'>
          <Link to='/ContactPage'>Contact Page</Link>
        </div>

        <div className='right'>
          <Link to='/Cart'>
            <FaShoppingCart />
            {totalQuantity > 0 && (
        <span className='cart-count'>{totalQuantity}</span> 
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
