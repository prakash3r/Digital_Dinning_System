import React, { useState } from 'react';
import './cart.css';
import paymentImage from './images/payment_image.jpg';

const Cart = ({ cartItems, removeFromCart, finalizeOrder }) => {
  const [showPaymentImage, setShowPaymentImage] = useState(false);

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handlePayment = () => {
    setShowPaymentImage(true);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">Total Amount: ${calculateTotalAmount()}</div>
          <div className="cart-actions">
            <button onClick={() => finalizeOrder(calculateTotalAmount())}>Finalize Order</button>
            <button onClick={handlePayment}>Make Payment</button>
          </div>
          {showPaymentImage && <img src={paymentImage} alt="Payment" className="payment-image" />}
        </>
      )}
    </div>
  );
};

export default Cart;
