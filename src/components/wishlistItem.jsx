import React, { Component } from "react";
import "./wishlistitem.scss";

export default class WishlistItem extends Component {
  render() {
    const images = require.context("../assets/img", true);
    const { imageUrl, title, quantity, alt, price } = this.props.item;

    return (
      <div className="wishlistitem">
        <div className="image">
          <img src={images(`${imageUrl}`)} alt={alt} />
        </div>
        <div className="info">
          <p className="title">{title}</p>
        </div>
        <div className="quantity">
          <p>{quantity}</p>
        </div>
        <div className="price">
          <p>{`$${price}`}</p>
        </div>
      </div>
    );
  }
}
