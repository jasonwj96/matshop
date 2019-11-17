import React, { useState } from "react";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = props => {
  const [ratingThreshold] = useState(50);
  const { imageUrl, title, description, alt, price, rating } = props.product;
  const titleLength = 60;

  const content = (
    <div className="product">
      <div className="title">
        <Link className="link" to="/">
          {title.length > titleLength
            ? `${title.slice(0, titleLength)}...`
            : title}
        </Link>
      </div>
      <div className="picture">
        <img src={`/src/assets/img/${imageUrl}`} alt={alt} />
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
