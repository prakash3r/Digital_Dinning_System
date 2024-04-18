import React from 'react';
import { Link } from 'react-router-dom';
import chicken_pizza from './images/chicken_pizza.jpg';
import panner_pizza from './images/panner_pizza.jpg';
import tomato_pizza from './images/tomato_pizza.jpg';
import chicken_burger from './images/chicken_burger.jpg';
import chicken_tower_burger from './images/chicken_tower_burger.jpg';
import veg_cheese_burger from './images/veg_cheese_burger.jpg';
import Lime_mojito from './images/Lime_mojito.jpg';
import Blue_mojito from './images/Blue_mojito.jpg';
import './styles.css';

const Menu = ({ addToCart }) => {
  const dishes = [
    { id: 1, name: 'Chicken Pizza', description: 'Savory chicken atop cheesy pizza.', image: chicken_pizza, price: 10 },
    { id: 2, name: 'Panner Pizza', description: 'Paneer atop flavorful cheesy pizza.', image: panner_pizza, price: 20 },
    { id: 3, name: 'Tomato Pizza', description: 'Tangy tomatoes on cheesy pizza.', image: tomato_pizza, price: 5 },
    { id: 4, name: 'Chicken Burger', description: 'Juicy chicken in savory burger.', image: chicken_burger, price: 7},
    { id: 5, name: 'Chicken Tower Pizza', description: 'Towering chicken layers in burger.', image: chicken_tower_burger, price: 10 },
    { id: 6, name: 'Veg Cheese Burger', description: 'Vegetarian delight: cheesy burger.', image: veg_cheese_burger, price: 20 },
    { id: 7, name: 'Lime Mojito', description: 'Refreshing lime-infused summer beverage.', image: Lime_mojito, price: 5 },
    { id: 8, name: 'Blueberry Mojito', description: 'Blueberry-infused twist on classic mojito.er', image: Blue_mojito, price: 7}
  ];

  const handleAddToCart = (dish, quantity) => {
    addToCart({ ...dish, quantity });
  };

  return (
    <div style={{ textAlign: 'center' }}> 
      <h2 className="menu-heading">Menu</h2>
      <div className="dishes-container">
        {dishes.map(dish => (
          <div className="dish" key={dish.id}>
            <h3>{dish.name}</h3>
            <img src={dish.image} alt={dish.name} />
            <p>{dish.description}</p>
            <button onClick={() => handleAddToCart(dish, 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Menu;
