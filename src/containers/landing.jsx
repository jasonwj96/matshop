import React, { useState, useEffect } from "react";
import "./landing.scss";
import LandingSection from "../components/landingSection";
import configuration from "../config";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";
import OfferPanel from "../components/offerPanel";

const Landing = () => {
  const [products, setProducts] = useState([]);
  const controller = new AbortController();
  document.title = "Matshop - Home";

  useEffect(() => {
    fetchProducts();
    return () => {
      controller.abort();
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${configuration.apiPath}/Home`);

      if (!response.ok) throw new Error("The products are gone ¯\\_(ツ)_/¯.");

      const products = await response.json();

      setProducts(products);
    } catch (err) {
      console.log(err.message);
    }
  };

  const offerItem = {
    name: "Apple iPhone X, GSM Unlocked, 64GB - Silver",
    description:
      "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
    imageUrl: "./product4.png",
    alt: "iPhone",
    price: 899.99
  };

  const content = (
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
        {products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <LandingSection
            heading={"What's hot right now"}
            products={products}
          />
        )}

        <OfferPanel item={offerItem} />

        {products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <LandingSection heading={"Men's clothing"} products={products} />
        )}

        {products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <LandingSection heading={"Latest in tech"} products={products} />
        )}
      </div>
      <Footer />
    </div>
  );

  return content;
};

export default Landing;
