import React from "react";
import "./notification.scss";

const Notification = props => {
  const content = (
    <div id="notification" className="notification-container">
      <div className="icon">
        <i className="fas fa-exclamation-circle" />
      </div>
      <div className="message">
        <p className="notification-title">{props.title}</p>
        <p className="notification-desc">{props.message}</p>
      </div>
    </div>
  );

  return content;
};

export default Notification;
