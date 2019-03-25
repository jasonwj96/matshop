import React, { useState } from "react";
import "./product.scss";

const Product = props => {
  const [ratingThreshold] = useState(50);
  const images = require.context("../assets/img", true);
  const { imageUrl, title, description, alt, price, rating } = props.product;

  const content = (
    <div className="product">
      <div className="title">
        <a href="/">{title}</a>
      </div>
      <div className="picture">
        <img src={images(`${imageUrl}`)} alt={alt} />
      </div>
      <div className="description">{description.slice(0, 90) + "..."}</div>
      <div className="productFooter">
        <div className="rating">
          {rating >= ratingThreshold ? (
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

  return content;
};

export default Product;
