import React, { Component } from "react";
import "./landing.scss";
import LandingSection from "./landingSection";
import apiPath from "../config";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${apiPath}/Landing`);

      if (!response.ok)
        throw new Error(
          "There was an error while trying fetching the products."
        );

      const products = await response.json();
      this.setState({ products });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="cover">
          <div className="overlay">
            <div className="cover-section">Welcome to Matshop!</div>
            <div className="cover-section">It's nice to meet you</div>
          </div>
        </div>
        {this.state.products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <LandingSection
            heading={"What's hot right now"}
            products={this.state.products}
          />
        )}

        {this.state.products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <LandingSection
            heading={"Men's clothing"}
            products={this.state.products}
          />
        )}

        {this.state.products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <LandingSection
            heading={"Latest in tech"}
            products={this.state.products}
          />
        )}
      </div>
    );
  }
}
