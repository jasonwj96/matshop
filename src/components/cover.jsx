import React from "react";
import "./cover.scss";

const Cover = props => {
  const style = {
    backgroundImage: `url(${props.imageUrl})`
  };

  const content = (
    <div className="cover" style={style}>
      <div className="overlay">
        <div className="cover-section">
          <p className="welcome-text">{props.header}</p>
          <p>You have 3 notifications</p>
          <p>We have 7 new offers for you</p>
        </div>
        <div className="scroll-msg">
          <p>Scroll down</p>
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    </div>
  );

  return content;
};

export default Cover;
