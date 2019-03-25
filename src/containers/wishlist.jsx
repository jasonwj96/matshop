import React, { Component } from "react";
import "./wishlist.scss";
import Navbar from "../components/navbar";
import WishlistItem from "../components/wishlistItem";
import Statusbar from "../components/statusbar";

export default class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          imageUrl: "./product1.jpg",
          title: "Lightweight Varsity Jacket",
          quantity: 5,
          alt: "Jacket",
          rating: 89,
          price: 19.99
        },
        {
          imageUrl: "./product2.jpg",
          title: "Apple iPhone X, GSM Unlocked, 64GB - Silver (Refurbished)",
          description:
            "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
          alt: "IPhone",
          quantity: 5,
          rating: 39,
          price: 899.99
        },
        {
          imageUrl: "./product3.jpg",
          title: "PlayStation 4 Slim 1TB Console",
          quantity: 9,
          alt: "Playstation 4",
          rating: 73,
          price: 299.99
        },
        {
          imageUrl: "./product1.jpg",
          title: "Lightweight Varsity Jacket",
          quantity: 5,
          alt: "Jacket",
          rating: 89,
          price: 19.99
        },
        {
          imageUrl: "./product2.jpg",
          title: "Apple iPhone X, GSM Unlocked, 64GB - Silver (Refurbished)",
          description:
            "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
          alt: "IPhone",
          quantity: 5,
          rating: 39,
          price: 899.99
        },
        {
          imageUrl: "./product3.jpg",
          title: "PlayStation 4 Slim 1TB Console",
          quantity: 9,
          alt: "Playstation 4",
          rating: 73,
          price: 299.99
        },
        {
          imageUrl: "./product1.jpg",
          title: "Lightweight Varsity Jacket",
          quantity: 5,
          alt: "Jacket",
          rating: 89,
          price: 19.99
        },
        {
          imageUrl: "./product2.jpg",
          title: "Apple iPhone X, GSM Unlocked, 64GB - Silver (Refurbished)",
          description:
            "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.",
          quantity: 5,
          alt: "IPhone",
          rating: 39,
          price: 899.99
        },
        {
          imageUrl: "./product3.jpg",
          title: "PlayStation 4 Slim 1TB Console",
          quantity: 9,
          alt: "Playstation 4",
          rating: 73,
          price: 299.99
        }
      ]
    };
  }

  componentDidMount() {
    document.title = "Matshop - Wishlist";
  }

  checkoutItems = () => console.log("Items checked out");

  render() {
    return (
      <div className="wishlist-container">
        <Navbar />
        <Statusbar />
        <div className="wishlist">
          <div className="header">
            <p>My wishlist items</p>
          </div>
          <div>
            {this.state.items.length > 0 ? (
              this.state.items.map((item, index) => {
                return <WishlistItem key={index} item={item} />;
              })
            ) : (
              <p>No items in your wishlist</p>
            )}
          </div>
          <div className="footer">
            <button onClick={this.checkoutItems}>Clear</button>
            <button onClick={this.checkoutItems}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}
