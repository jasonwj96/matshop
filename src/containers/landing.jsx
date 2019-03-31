import React, { useState, useEffect } from "react";
import "./landing.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";
import OfferPanel from "../components/offerPanel";
import Notification from "../components/notification";

const Landing = () => {
  const [products, setProducts] = useState([]);
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    document.title = "Matshop - Home";
    fetchProducts();
    displayNotification("Welcome back!", "You've been gone for a while!");
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${configuration.apiPath}/Home`);

      if (!response.ok) throw new Error("The products are gone ¯\\_(ツ)_/¯.");

      const products = await response.json();

      setProducts(products);
    } catch (err) {
      displayNotification("Products couldn't be retrieved", err.message);
    }
  };

  const displayNotification = (title, message) => {
    const notification = document.getElementById("notification");
    setNotificationTitle(title);
    setNotificationMessage(message);
    notification.style.opacity = 1;

    setTimeout(() => {
      notification.style.opacity = 0;
    }, 5000);
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
            <div className="cover-section">Good afternoon!</div>
            <div className="scroll-msg">
              <p>Scroll down</p>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
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
      <Notification title={notificationTitle} message={notificationMessage} />
      <Footer />
    </div>
  );

  return content;
};

export default Landing;
