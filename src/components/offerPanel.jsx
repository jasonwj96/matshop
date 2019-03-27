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
    var countDownDate = new Date("April 1, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
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

      // Display the result in the element with id="demo"
      setTimer(`${days}:${hours}:${minutes}:${seconds}`);

      // If the count down is finished, write some text
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
          <div className="price">{`$${props.item.price}`}</div>
          <p>{props.item.description}</p>
          {timer ? (
            <p className="timer">{timer}</p>
          ) : (
            <p className="placeholder-timer">00:00:00:00</p>
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
