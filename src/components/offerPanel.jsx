import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./offerPanel.scss";

const OfferPanel = props => {
  const [timer, setTimer] = useState("");

  const images = require.context("../assets/img", true);

  useEffect(() => {
    coundown();
  }, []);

  const coundown = () => {
    var countDownDate = new Date("April 29, 2019 15:37:25").getTime();

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
          <h2>TODAY'S OFFER</h2>
          <h3>{props.item.name}</h3>
          <div className="price">
            <span className="former-price">
              <span>$1099.99</span>
            </span>
            <span>{`$${props.item.price}`}</span>
          </div>
          <p>{props.item.description}</p>
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
        <img src={images(props.item.imageUrl)} alt={props.item.alt} />
      </div>
    </div>
  );
  return content;
};

export default OfferPanel;
