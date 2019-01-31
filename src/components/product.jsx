import React, { Component } from "react";
import "./product.scss";

export default class Product extends Component {
  state = {
    rating: 89,
    ratingThreshold: 50
  };

  renderRating() {}

  render() {
    const images = require.context("../assets/img", true);
    const { url, title, desc, alt, price, rating } = this.props.product;

    return (
      <div className="product">
        <div className="title">
          <a href="/">{title}</a>
        </div>
        <div className="picture">
          <img src={images(`${url}`)} alt={alt} />
        </div>
        <div className="description">{desc.slice(0, 90) + "..."}</div>
        <div className="productFooter">
          <div className="rating">
            {rating >= this.state.ratingThreshold ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="fas fa-heart-broken" />
            )}
            {`${rating}%`}
          </div>
          <div className="price">{`$${price}`}</div>
        </div>
      </div>
    );
  }
}
