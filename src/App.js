// App.js
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Cart from './Cart';
import Header from './Header';
import About from './About';
import CookView from './CookView';
import Help from'./Help';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const finalizeOrder = (totalAmount) => {
    alert('Order finalized successfully!');
    setCartItems([]);
  };

  return (
   
    <div style={{ paddingBottom: '80px' }}>
    <Header />
    <div style={{ minHeight: 'calc(80vh - 80px)', marginBottom: '80px' }}>
      <Routes>
        <Route path="/" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} finalizeOrder={finalizeOrder} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cook-view" element={<CookView cartItems={cartItems} />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
    <footer style={{ position: 'fixed', bottom: 0, width: '100%',height:'4%', backgroundColor: '#ffc107', color: 'black', padding: '20px', textAlign: 'center' }}>
      <p>Contact us: ChennaiCafet@email.com</p>
    </footer>
  </div>
    
  );
};

export default App;
