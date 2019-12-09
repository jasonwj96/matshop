import React, { useState, useEffect } from "react";
import "./category.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";

const Category = props => {
  const [category, setCategory] = useState("pets");
  const [header, setHeader] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCategory("pets");
    selectHeader();
    fetchProducts();
  });

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
    notification.style.opacity = 1;

    setTimeout(() => {
      notification.style.opacity = 0;
    }, 5000);
  };

  const selectHeader = () => {
    switch (category) {
      case "pets":
        setHeader("The best selection of items for man's best friend");
        break;
      case "clothes":
        setHeader("The latest fashion trends");
        break;
      case "books":
        setHeader("Your favorite book authors in one place");
        break;
      case "tech":
        setHeader("Cutting edge tech at the tip of your hands");
        break;
      default:
        // props.history.push("/");
        break;
    }
    return "";
  };

  const content = (
    <div className="category-container">
      <div className="cover">
        <div className="overlay">
          <div className="cover-section">{header}</div>
        </div>
      </div>
      {products.length === 0 ? (
        <div className="spinner">
          <i className="fas fa-spinner" />
        </div>
      ) : (
          <ItemSection heading={"What's hot right now"} products={products} />
        )}
    </div>
  );

  return content;
};

export default Category;
