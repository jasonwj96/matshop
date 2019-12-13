import React, { useState, useEffect } from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Configuration from "../config";

const Product = props => {
  const [ratingThreshold] = useState(50);
  const {
    product_image_name: url,
    product_title: title,
    product_description: desc,
    product_price: price,
    product_rating: rating } = props.product;
  const titleLength = 60;

  useEffect(() => {
  }, [props.product])

  return (
    <div className="product">
      <div className="title">
        <Link className="link" to="/">
          {title.length > titleLength
            ? `${title.slice(0, titleLength)}...`
            : title}
        </Link>
      </div>
      <div className="picture">
        <img src={Configuration.imageRepositoryUrl + url} />
      </div>
      <div className="desc">{`${desc.slice(0, 90)}...`}</div>
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
  )
};

export default Product;
