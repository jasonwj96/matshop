import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./offerPanel.scss";

const OfferPanel = props => {
  const [timer] = useState("03:18:37");

  const images = require.context("../assets/img", true);

  const content = (
    <div className="offer-container">
      <div className="offer-data">
        <h2>TODAY'S OFFER</h2>
        <h3>{props.item.name}</h3>
        <div className="price">{`$${props.item.price}`}</div>
        <p>{props.item.description}</p>
        <p className="timer">{timer}</p>
        <Link className="shop-btn" to="/">
          <button>Shop now</button>
        </Link>
      </div>
      <img src={images(props.item.imageUrl)} alt={props.item.alt} />
    </div>
  );
  return content;
};

export default OfferPanel;
