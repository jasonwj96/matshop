import React from "react";
import "./productMaintenanceItem.scss";
import Configuration from "../config";

const ProductMaintenanceItem = props => {
  const deleteItem = () => console.log("item deleted.");

  const { imageUrl, title, quantity, alt, price } = props.item;

  const content = (
    <div className="productMaintenanceItem">
      <div className="image">
        <img src={Configuration.imageRepositoryUrl + imageUrl} alt={alt} />
      </div>
      <div className="title">
        <p>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</p>
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
