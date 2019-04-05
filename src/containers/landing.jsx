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
  const [coverImg, setCoverImg] = useState("./morning_cover.jpg");
  const [coverHeader, setCoverHeader] = useState("");
  const images = require.context("../assets/img", true);
  // const { products, isLoading, error } = useHttp("/home");

  useEffect(() => {
    updateCover();
    document.title = "Matshop - Home";
    fetchProducts();
  }, []);

  const updateCover = () => {
    const urls = [
      "./morning_cover.jpg",
      "./sunset_cover.png",
      "./night_cover.png"
    ];
    // const currentHour = new Date("").getHours();
    const currentHour = new Date("April 29, 2019 19:37:25").getHours();

    //morning
    if (currentHour >= 0 && currentHour < 12) {
      setCoverImg(urls[0]);
      setCoverHeader("Good morning, Jason!");
    }
    //afternoon
    if (currentHour >= 12 && currentHour < 19) {
      setCoverImg(urls[1]);
      setCoverHeader("Good afternoon, Jason!");
    }
    //night
    if (currentHour >= 19 && currentHour <= 23) {
      setCoverImg(urls[2]);
      setCoverHeader("Good night, Jason!");
    }
  };

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

  const content = (
    <div>
      <Navbar />
      <Statusbar />
      <div className="landing">
        <Cover imageUrl={images(`${coverImg}`)} header={coverHeader} />

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
