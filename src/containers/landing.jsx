import React, { Component } from "react";
import "./landing.scss";
import LandingSection from "../components/landingSection";
import configuration from "../config";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${configuration.apiPath}/Home`);

      if (!response.ok) throw new Error("The products are gone ¯\\_(ツ)_/¯.");

      const products = await response.json();
      this.setState({ products });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Statusbar />
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
        <Footer />
      </div>
    );
  }
}
