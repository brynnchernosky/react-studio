import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // object with item name, item price, and item count

  const macaronList = [
    {
      item: "Vanilla Macaron",
      image: "VanillaMacarons.png",
      price: 2,
      description:
        "Our famous vanilla bean macaron with white chocolate ganache filling.",
    },
    {
      item: "Chocolate Macaron",
      image: "ChocolateMacarons.png",
      price: 2,
      description:
        "Our famous dark chocolate macaron with dark chocolate ganache filling.",
    },
    {
      item: "Raspberry Macaron",
      image: "RaspberryMacarons.png",
      price: 2,
      description: "Our famous raspberry macaron with raspberry jam filling.",
    },
    {
      item: "Pistachio Macaron",
      image: "PistachioMacarons.png",
      price: 2,
      description:
        "Our famous pistachio macaron with white chocolate pistachio ganache filling.",
    },
    {
      item: "Rose Macaron",
      image: "RoseMacarons.png",
      price: 2,
      description:
        "Our famous rose macaron with white chocolate ganache filling.",
    },
    {
      item: "Caramel Macaron",
      image: "CaramelMacarons.png",
      price: 2,
      description: "Our famous caramel macaron with salted caramel filling.",
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>CS1300 Bakery</h1>
      </div>
      <div className="contentWrapper">
        <div className="menu">
          <h2>Macarons</h2>
          <div className="row">
            {macaronList.map((macaron, i) => {
              return (
                <div className="menuItem" key={i}>
                  <img className="menuItemImage" src={macaron.image} />
                  <div className="menuItemContent">
                    <div className="menuItemHeader">
                      <h3>{macaron.item}</h3>
                      <button className="addToCartButton">+</button>
                    </div>
                    <p>${macaron.price}</p>
                    <p>{macaron.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart"></div>
      </div>
    </div>
  );
}

export default App;
