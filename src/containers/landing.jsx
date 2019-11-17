import React, { useState, useEffect } from "react";
import "./landing.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";
import OfferPanel from "../components/offerPanel";
import Cover from "../components/cover";

const Landing = () => {
  const [coverImg, setCoverImg] = useState(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
  const [coverHeader, setCoverHeader] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    updateCover();
    document.title = "Matshop - Home";
  }, []);

  const updateCover = () => {

    const currentHour = new Date().getHours();

    //morning
    if (currentHour >= 0 && currentHour < 12) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
      setCoverHeader("Good morning, Jason!");
    }
    //afternoon
    if (currentHour >= 12 && currentHour < 19) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.sunset);
      setCoverHeader("Good afternoon, Jason!");
    }
    //night
    if (currentHour >= 19 && currentHour <= 23) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.night);
      setCoverHeader("Good night, Jason!");
    }
  };

  const fetchProducts = async () => {
    await fetch(`${configuration.apiPath}/Home`)
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
