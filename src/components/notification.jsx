import React, { Component } from "react";
import "./notification.scss";

export default class Notification extends Component {
  render() {
    return (
      <div className="container">
        <div className="icon">
          <i class="fas fa-exclamation-circle" />
          {/* <i class="fas fa-check-square" /> */}
        </div>
        <div className="message">
          <p className="notification-title">New message</p>
          <p className="notification-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            excepturi distinctio, debitis quasi eos minima.
          </p>
        </div>
      </div>
    );
  }
}
