import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cartSlice';
import '../../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="msg">Your cart is empty.</p>
      ):
       (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
                </div>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
              </li>
            ))}
          </ul>
          <div className='total'>
          <p >Total Items: {totalQuantity}</p>
          <p >Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          <div className="cart-btn">
          <button onClick={handleClearCart} >Clear Cart</button>
        </div>

        </div>
      )}
    </div>
  );
};

export default Cart;