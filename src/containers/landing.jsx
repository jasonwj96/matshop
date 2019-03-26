import React, { Component } from "react";
import "./landing.scss";
import LandingSection from "../components/landingSection";
import configuration from "../config";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";
import OfferPanel from "../components/offerPanel";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      userLoggedIn: localStorage.getItem("userEmail") ? true : false
    };
  }

  async componentDidMount() {
    document.title = "Matshop - Home";

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
    const offerItem = {
      name: "Apple iPhone X, GSM Unlocked, 64GB - Silver",
      description:
        "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
      imageUrl: "./product4.png",
      alt: "iPhone",
      price: 899.99
    };

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

          <OfferPanel item={offerItem} />

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
