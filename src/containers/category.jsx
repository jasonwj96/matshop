import React, { Component } from "react";
import "./category.scss";
import Navbar from "../components/navbar";
import Statusbar from "../components/statusbar";

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      category: ""
    };
  }

  componentWillReceiveProps() {
    this.createSectionHeader(); //fix this
  }

  componentDidMount() {
    this.createSectionHeader();
  }

  createSectionHeader = () => {
    const params = new URLSearchParams(this.props.location.search);
    const category = params.get("c");

    let header = "";

    switch (category) {
      case "Pets":
        header = "Items for man's best friend";
        break;
      case "Clothes":
        header = "Clothes from the most prestigious brands";
        break;
      case "Tech":
        header = "Cutting edge tech at the tip of your hands";
        break;
      case "Books":
        header = "Timeless classics from all genres";
        break;
      default:
        header =
          "Unless you got a time machine this category no longer exists :(";
        break;
    }

    this.setState({ header, category }, () => {
      document.title = `Matshop - ${this.state.category}`;
    });
  };

  render() {
    return (
      <div className="category-container">
        <Navbar />
        <Statusbar />
        <p className="header">{this.state.header}</p>
      </div>
    );
  }
}
