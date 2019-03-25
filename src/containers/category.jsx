import React, { useState, useEffect } from "react";
import "./category.scss";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";

const Category = props => {
  const [category, setCategory] = useState(props.match.params.c);
  const [header, setHeader] = useState("");

  useEffect(() => {
    setCategory(props.match.params.c);
    selectHeader();
  });

  const selectHeader = () => {
    switch (category) {
      case "pets":
        setHeader("Items for man's best friends");
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
        props.history.push("/");
        break;
    }

    return "";
  };

  const content = (
    <div className="category-container">
      <Navbar />
      <Statusbar />
      <p className="header">{header}</p>
      <Footer />
    </div>
  );

  return content;
};

export default Category;
