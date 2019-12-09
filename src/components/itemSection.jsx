import React from "react";
import "./itemSection.scss";
import Product from "./product";

const ItemSection = props => {

  const content = (
    <div>
      <div className="section">
        <h1 className="heading">{props.heading}</h1>
        <div className="items">
          {
            props.products.map((product, index) => <Product key={index} product={product} />)
          }
        </div>
      </div>
    </div>
  );

  return content;
};

export default ItemSection;
