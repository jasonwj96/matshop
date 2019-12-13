import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./offerPanel.scss";
import Configuration from "../config";

const OfferPanel = props => {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    coundown();
  }, []);

  const coundown = () => {
    var countDownDate = new Date("December 25, 2019 15:37:25").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days.toString().length < 2) days = "0" + days;
      if (hours.toString().length < 2) hours = "0" + hours;
      if (minutes.toString().length < 2) minutes = "0" + minutes;
      if (seconds.toString().length < 2) seconds = "0" + seconds;

      setTimer(`${days}:${hours}:${minutes}:${seconds}`);

      if (distance < 0) {
        clearInterval(x);
        setTimer("Offer expired");
      }
    }, 1000);
  };

  const content = (
    <div className="offer-container">
      <div className="offer">
        <div className="offer-data">
          <h2>CHRISTMAS OFFER</h2>
          <h3>{props.item.product_title}</h3>
          <div className="price">
            <span className="former-price">
              <span>$999.99</span>
            </span>
            <span>{`$${props.item.product_price}`}</span>
          </div>
          <p>{props.item.product_description}</p>
          {timer ? (
            <p className="timer">{timer}</p>
          ) : (
              <div className="spinner">
                <i className="fas fa-spinner" />
              </div>
            )}
          <Link className="shop-btn" to="/">
            <button>Shop now</button>
          </Link>
        </div>
        <img src={Configuration.imageRepositoryUrl + props.item.product_image_name} />
      </div>
    </div>
  );
  return content;
};

export default OfferPanel;
