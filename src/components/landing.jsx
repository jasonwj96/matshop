import React, { Component } from "react";
import "./landing.scss";
import LandingSection from "./landingSection";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/Home")
      .then(response => response.json())
      .then(products => this.setState({ products }));
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
        <LandingSection
          heading={"What's hot right now"}
          products={this.state.products}
        />
        <LandingSection
          heading={"Men's clothing"}
          products={this.state.products}
        />
        <LandingSection
          heading={"The latest in tech"}
          products={this.state.products}
        />
      </div>
    );
  }
}
