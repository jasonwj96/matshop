import React, { Component } from "react";
import "./notification.scss";

export default class Notification extends Component {
  render() {
    return (
      <div id="notification" className="notification-container">
        <div className="icon">
          <i className="fas fa-exclamation-circle" />
        </div>
        <div className="message">
          <p className="notification-title">{this.props.title}</p>
          <p className="notification-desc">{this.props.message}</p>
        </div>
      </div>
    );
  }
}
