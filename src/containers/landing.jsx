import React, { useState, useEffect } from "react";
import "./landing.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";
import OfferPanel from "../components/offerPanel";
import Cover from "../components/cover";

const Landing = () => {
  const [coverImg, setCoverImg] = useState(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
  const [coverHeader, setCoverHeader] = useState("");
  const [products, setProducts] = useState([
    {
      url: "product1.jpg",
      title: "Lightweight Varsity Jacket",
      desc:
        "Mens Lightweight Varsity Letterman Jacket Made in USA. Available in 7 different colors",
      alt: "Jacket",
      rating: 89,
      price: 19.99
    },

    {
      url: "product3.jpg",
      title: "PlayStation 4 Slim 1TB Console",
      desc: "All  lighter slimmer PS4. 1TB hard drive. All the greatest, games, TV, music and more",
      alt: "Playstation 4",
      rating: 73,
      price: 299.99
    },

    {
      url: "product1.jpg",
      title: "Lightweight Varsity Jacket",
      desc: "Mens Lightweight Varsity Letterman Jacket Made in USA. Available in 7 different colors",
      alt: "Jacket",
      rating: 89,
      price: 19.99
    }
  ]

  );

  useEffect(() => {
    document.title = "Matshop - Home";
    updateCover();
    return () => {
      fetch(`${configuration.apiPath}/Home`)
        .then(
          response =>
            response.json()
        )
        .then(
          json => {
            setProducts(json)
          }
        )
        .catch(
          err => console.log(err)
        );
    }
  }, []);

  const updateCover = () => {

    const currentHour = new Date().getHours();

    //morning
    if (currentHour >= 0 && currentHour < 12) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
      setCoverHeader("Good morning!");
    }
    //afternoon
    if (currentHour >= 12 && currentHour < 19) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.sunset);
      setCoverHeader("Good afternoon!");
    }
    //night
    if (currentHour >= 19 && currentHour <= 23) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.night);
      setCoverHeader("Good night!");
    }
  };


  const offerItem = {
    name: "Apple iPhone 11 Pro",
    description: "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    imageUrl: "./product4.png",
    alt: "iPhone",
    price: 899.99
  };

  const content = (
    <div>
      <div className="landing">
        <Cover imageUrl={coverImg} header={coverHeader} />

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
    </div>
  );

  return content;
};

export default Landing;
