import React, { useEffect, useState } from 'react';
import './preferences.scss';
import ProductMaintenanceItem from '../components/productMaintenanceItem';

const Preferences = () => {

  const [items] = useState([
    {
      imageUrl: "./product1.jpg",
      title: "Lightweight Varsity Jacket",
      quantity: 5,
      alt: "Jacket",
      rating: 89,
      price: 19.99
    },
    {
      imageUrl: "./product2.jpg",
      title: "Apple iPhone X, GSM Unlocked, 64GB - Silver (Refurbished)",
      description:
        "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
      alt: "IPhone",
      quantity: 5,
      rating: 39,
      price: 899.99
    },
    {
      imageUrl: "./product3.jpg",
      title: "PlayStation 4 Slim 1TB Console",
      quantity: 9,
      alt: "Playstation 4",
      rating: 73,
      price: 299.99
    }
  ]);

  const addItem = () => {

  }

  return (
    <div id="preferences-container">
      <div className="productlist-container">
        <div className="productlist">
          <div className="header">
            <p>Product list</p>
          </div>
          <div>
            {items.length > 0 ? (
              items.map((item, index) => {
                return <ProductMaintenanceItem key={index} item={item} />;
              })
            ) : (
                <p id="empty-msg">There are no products in the database</p>
              )}
          </div>
          <div id="editPanel">
            <form>
              <div>
                <p id="editpanel-title">Add product</p>
                <input className="input" type="text" placeholder="Product ID" />
                <input className="input" type="text" placeholder="Description" />
                <input className="input" type="text" placeholder="Price" />
                <input className="input" type="text" placeholder="Image name (with extension)" />
              </div>
            </form>
          </div>
          <div className="footer">
            <button onClick={addItem}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preferences
