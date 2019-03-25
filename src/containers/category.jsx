import React, { useState } from "react";
import "./category.scss";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";
import Footer from "../components/footer";

const Category = props => {
  const [header] = useState("Hello world");

  const selectHeader = () => {};

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
