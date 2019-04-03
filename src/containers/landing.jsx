import React, { useState, useEffect } from "react";
import "./landing.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";
import OfferPanel from "../components/offerPanel";
import Cover from "../components/cover";

const Landing = () => {
  const [products, setProducts] = useState([]);
  // const { products, isLoading, error } = useHttp("/home");

  useEffect(() => {
    document.title = "Matshop - Home";
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${configuration.apiPath}/Home`);

      if (!response.ok) throw new Error("The products are gone ¯\\_(ツ)_/¯.");

      const products = await response.json();

      setProducts(products);
    } catch (err) {}
  };

  const offerItem = {
    name: "Apple iPhone X, GSM Unlocked, 64GB - Silver",
    description:
      "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
    imageUrl: "./product4.png",
    alt: "iPhone",
    price: 899.99
  };
  const images = require.context("../assets/img", true);
  const imageUrl = "./morning_cover.jpg";

  const content = (
    <div>
      <Navbar />
      <Statusbar />
      <div className="landing">
        <Cover imageUrl={images(`${imageUrl}`)} />

        {products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <ItemSection heading={"What's hot right now"} products={products} />
        )}

        <OfferPanel item={offerItem} />

        {products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <ItemSection heading={"Men's clothing"} products={products} />
        )}

        {products.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
          <ItemSection heading={"Latest in tech"} products={products} />
        )}
      </div>
      <Footer />
    </div>
  );

  return content;
};

export default Landing;
