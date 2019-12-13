import React from "react";
import "./productMaintenanceItem.scss";
import Configuration from "../config";

const ProductMaintenanceItem = props => {
  const deleteItem = (event) => {

    if (window.confirm("Do you wish to delete this product?")) {
      const values = event.target.parentNode.parentNode.parentNode.parentNode.childNodes;
      const productId = values[1].innerHTML;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productId)
      }

      fetch(`${Configuration.apiPath}/deleteProduct.php`, options)
        .then(
          (response) => {
            window.alert("Product deleted successfully");
          }
        )
        .catch(
          (err) => console.log(err)
        )
    }
  }

  const editItem = (event) => {

  }

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
        <div className="controls">
          <button className="edit-btn" onClick={editItem}>
            <i className="fas fa-edit" />
          </button>
          <button className="delete-btn" onClick={deleteItem}>
            <i className="fas fa-times-circle" />
          </button>
        </div>
      </div>
    </div>
  );

  return content;
};

export default ProductMaintenanceItem;
