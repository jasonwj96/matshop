import React from "react";
import "./productMaintenanceItem.scss";
import Configuration from "../config";

const ProductMaintenanceItem = props => {
  const deleteItem = () => console.log("item deleted.");
  const {
    product_image_name: imageUrl,
    product_id: id,
    product_title: title,
    product_price: price,
    product_category: category,
    product_rating: rating
  } = props.item;


  const content = (
    <div className="productMaintenanceItem">
      <div className="image">
        <img src={Configuration.imageRepositoryUrl + imageUrl} />
      </div>
      <div className="id">
        {id}
      </div>
      <div className="category">
        {category}
      </div>
      <div className="rating">
        {rating}
      </div>
      <div className="title">
        <p>{title.length > 100 ? `${title.slice(0, 100)}...` : title}</p>
      </div>
      <div className="info">
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

export default ProductMaintenanceItem;
