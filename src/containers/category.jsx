import React, { useState } from "react";
import "./category.scss";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";

const Category = props => {
  const [header] = useState("Hello world");

  const content = (
    <div className="category-container">
      <Navbar />
      <Statusbar />
      <p className="header">{header}</p>
    </div>
  );

  return content;
};

export default Category;
