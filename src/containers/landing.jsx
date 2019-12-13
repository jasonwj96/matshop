import React, { useState, useEffect } from "react";
import "./landing.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";
import OfferPanel from "../components/offerPanel";
import Cover from "../components/cover";

const Landing = () => {
  const [coverImg, setCoverImg] = useState(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
  const [coverHeader, setCoverHeader] = useState("");
  const [hotProducts, setHotProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [latestTech, setLatestTech] = useState([]);
  const [offerItem, setOfferItem] = useState({});

  useEffect(() => {
    document.title = "Matshop - Home";
    updateCover();

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify("hot")
    };

    fetch(`${configuration.apiPath}/getByCategory.php`, options)
      .then(
        response =>
          response.clone().text()
      )
      .then(
        json => {
          setHotProducts(JSON.parse(json))
        }
      )
      .catch(
        err => console.log(err)
      );


    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify("men")
    };


    fetch(`${configuration.apiPath}/getByCategory.php`, options)
      .then(
        response =>
          response.clone().text()
      )
      .then(
        json => {
          setMenProducts(JSON.parse(json))
        }
      )
      .catch(
        err => console.log(err)
      );


    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify("tech")
    };

    fetch(`${configuration.apiPath}/getByCategory.php`, options)
      .then(
        response =>
          response.clone().text()
      )
      .then(
        json => {
          setLatestTech(JSON.parse(json))
        }
      )
      .catch(
        err => console.log(err)
      );

    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify("offer")
    };

    fetch(`${configuration.apiPath}/getByCategory.php`, options)
      .then(
        response =>
          response.clone().text()
      )
      .then(
        json => {
          setOfferItem(JSON.parse(json)[0])
        }
      )
      .catch(
        err => console.log(err)
      );

  }, []);

  const updateCover = () => {

    const currentHour = new Date().getHours();
    //morning
    if (currentHour >= 0 && currentHour < 12) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
      setCoverHeader("Good morning");
    }
    //afternoon
    if (currentHour >= 12 && currentHour < 19) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.sunset);
      setCoverHeader("Good afternoon");
    }
    //night
    if (currentHour >= 19 && currentHour <= 23) {
      setCoverImg(configuration.imageRepositoryUrl + configuration.coverImageUrls.night);
      setCoverHeader("Good evening");
    }
  };

  const content = (
    <div>
      <div className="landing">
        <Cover imageUrl={coverImg} header={coverHeader} />

        {hotProducts.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
            <ItemSection heading={"What's hot right now"} products={hotProducts} />
          )}

        <OfferPanel item={offerItem} />

        {hotProducts.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
            <ItemSection heading={"Men's clothing"} products={menProducts} />
          )}

        {hotProducts.length === 0 ? (
          <div className="spinner">
            <i className="fas fa-spinner" />
          </div>
        ) : (
            <ItemSection heading={"Latest in tech"} products={latestTech} />
          )}
      </div>
    </div>
  );

  return content;
};

export default Landing;
