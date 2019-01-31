import React, { Component } from "react";
import "./landingSection.scss";
import Product from "./product";

export default class LandingSection extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1 className="heading">{this.props.heading}</h1>
          <div className="items">
            {this.props.products.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
