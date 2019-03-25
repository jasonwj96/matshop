import React from "react";
import "./wishlistitem.scss";

const WishlistItem = props => {
  const deleteItem = () => console.log("item deleted.");

  const images = require.context("../assets/img", true);
  const { imageUrl, title, quantity, alt, price } = props.item;

  const content = (
    <div className="wishlistitem">
      <div className="image">
        <img src={images(`${imageUrl}`)} alt={alt} />
      </div>
      <div className="title">
        <p>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</p>
      </div>
      <div className="info">
        <div className="quantity">
          <p>{quantity}</p>
        </div>
        <div className="price">
          <p>{`$${price}`}</p>
        </div>

        <div className="delete-btn">
          <button onClick={deleteItem}>
            <i className="fas fa-times-circle" />
          </button>
        </div>
      </div>
    </div>
  );

  return content;
};

export default WishlistItem;
