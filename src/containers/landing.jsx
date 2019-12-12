import React, { useState, useEffect } from "react";
import "./landing.scss";
import ItemSection from "../components/itemSection";
import configuration from "../config";
import OfferPanel from "../components/offerPanel";
import Cover from "../components/cover";

const Landing = () => {
  const [coverImg, setCoverImg] = useState(configuration.imageRepositoryUrl + configuration.coverImageUrls.morning);
  const [coverHeader, setCoverHeader] = useState("");
  const [hotProducts, setHotProducts] = useState([
    {
      url: "uhdtv.jpg",
      title: "Samsung 65-Inch 4K Smart TV",
      desc: "ENHANCED DETAIL WITH HDR: 4K depth of detail with high dynamic range lets you see shades of color that reveal more detail than HDTV can deliver",
      alt: "uhdtv",
      rating: 23,
      price: 597.99
    },
    {
      url: "switch.jpg",
      title: "Nintendo Switch with Neon Blue and Neon Red Joy‑Con",
      desc: "Play your way with the Nintendo Switch gaming system. Whether you’re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life. Dock your Nintendo Switch to enjoy HD gaming on your TV. Heading out? Just undock your console and keep playing in handheld mode",
      alt: "Nintendo Switch",
      rating: 99,
      price: 343.99
    },
    {
      url: "fitbit.jpg",
      title: "Fitbit Versa Smart Watch, Black/Black Aluminium",
      desc: "Track your all day activity, 24/7 heart rate, & sleep stages, all with a 4 plus day battery life (varies with use and other factors) , Charge time (0 to 100 percent): Two hours . Slim, comfortable design with a lightweight, anodized aluminum watch body",
      alt: "Fitbit Versa",
      rating: 87,
      price: 129.99
    },
    {
      url: "cyberpunk.jpg",
      title: "Cyberpunk 2077 - PC",
      desc: "Become a cyberpunk an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City",
      alt: "Cyberpunk 2077",
      rating: 100,
      price: 59.99
    },
    {
      url: "yeezy.jpg",
      title: "YEEZY BOOST 350 V2 BLACK NON-REFLECTIVE",
      desc: "Through evolved design elements and advanced technology, the adidas Yeezy Boost 350 V2 lives up to its cults appeal.",
      alt: "Yeezy",
      rating: 93,
      price: 340
    }
  ]
  );

  const [menProducts, setMenProducts] = useState([
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
      url: "gapjacket.jpg",
      title: "Sherpa-Lined Icon Denim Jacket",
      desc:
        "Better denim. Better planet. This pair of denim is part of our water-saving Washwell™ program. Compared to conventional wash methods, Washwell™ has saved millions of liters of water since 2016.",
      alt: "Sherpa-Lined Icon Denim Jacket",
      rating: 76,
      price: 128.00
    },
    {
      url: "gapsocks.jpg",
      title: "Colorblock Stripe Crew Socks",
      desc:
        "Soft knit. Ribbing at top. Reinforced toe and heel. Colorblock styling. Allover stripes.",
      alt: "Colorblock Stripe Crew Socks",
      rating: 95,
      price: 7.95
    },
  ]
  );


  const [latestTech, setLatestTech] = useState([
    {
      url: "product3.jpg",
      title: "PlayStation 4 Slim 1TB Console",
      desc: "All lighter slimmer PS4. 1TB hard drive. All the greatest, games, TV, music and more",
      alt: "Playstation 4",
      rating: 73,
      price: 299.99
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
            setHotProducts(json)
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
