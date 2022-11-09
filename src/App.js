import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import Badge from "@mui/joy/Badge";
import TextField from "@mui/material/TextField";
import { MenuSection } from "./MenuSection";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState(new Map());
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

  const profiteroleList = [
    {
      item: "Classic Profiterole",
      image: "Vanilla.png",
      price: 4,
      description: "Our classic vanilla profiterole.",
    },
    {
      item: "Chocolate Profiterole",
      image: "Chocolate.png",
      price: 4,
      description: "Our classic profiterole with chocolate glaze.",
    },
    {
      item: "Green Tea Profiterole",
      image: "GreenTea.png",
      price: 4,
      description: "Our classic profiterole with green tea glaze.",
    },
    {
      item: "Oreo Profiterole",
      image: "Oreo.png",
      price: 4,
      description:
        "Our classic profiterole with vanilla glaze and Oreo crumbles.",
    },
    {
      item: "Strawberry Profiterole",
      image: "Strawberry.jpeg",
      price: 4,
      description: "Our classic profiterole with strawberry glaze.",
    },
  ];

  const [notificationItem, setNotificationItem] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const fullMenu = profiteroleList + macaronList;

  const addToCart = (itemName, itemPrice) => {
    setNotificationItem(itemName);
    const items = cartItems;
    if (items.has(itemName)) {
      items.set(itemName, {
        price: itemPrice,
        quantity: Number(cartItems.get(itemName).quantity) + 1,
      });
    } else {
      items.set(itemName, { price: itemPrice, quantity: 1 });
    }
    setCartItems(items);
    setNotificationOpen(true);
    setNumItems(numItems + 1);
  };

  const setNumberInCart = (itemName, count) => {
    console.log(count);
    const changeInQuantity = count - cartItems.get(itemName).quantity;
    const items = cartItems;
    if (items.has(itemName)) {
      if (count > 1) {
        items.set(itemName, {
          price: cartItems.get(itemName).price,
          quantity: count,
        });
      } else {
        items.delete(itemName);
      }
    }
    setNumItems(numItems + changeInQuantity);
    setCartItems(items);
  };

  let totalPrice = 0;
  const [numItems, setNumItems] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <h1>CS1300 Bakery</h1>
        <IconButton
          onClick={() => setCartOpen(!cartOpen)}
          style={{ position: "fixed", left: "95vw" }}
        >
          {cartOpen ? (
            <CloseIcon />
          ) : (
            <Badge
              variant="solid"
              color="primary"
              badgeContent={numItems}
              max={10}
            >
              <ShoppingCartIcon />
            </Badge>
          )}
        </IconButton>
      </div>
      <div className="contentWrapper">
        <div className={cartOpen ? "menu-cartOpen" : "menu"}>
          <MenuSection
            title={"Macarons"}
            list={macaronList}
            addToCart={addToCart}
          />
          <br />
          <MenuSection
            title={"Profiteroles"}
            list={profiteroleList}
            addToCart={addToCart}
          />
          <br />
          <br />
        </div>
        {cartOpen && (
          <div className="cart">
            <h2>Items in your shopping cart</h2>
            {cartItems.size > 0 &&
              Array.from(cartItems).map((item, i) => {
                if (i == 0) {
                  totalPrice = 0;
                }
                totalPrice += item[1].quantity * item[1].price;
                return (
                  <div className="cartItem" key={i}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>{item[0]}</p>
                        <div className="quantityRow">
                          <p style={{ marginRight: "5px" }}>Quantity</p>
                          <TextField
                            type="number"
                            size="small"
                            value={item[1].quantity}
                            sx={{ width: "5em" }}
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            onChange={(e) => {
                              const regex = /^[0-9\b]+$/;
                              if (regex.test(e.target.value)) {
                                setNumberInCart(item[0], e.target.value);
                              }
                            }}
                          />
                        </div>
                      </div>
                      <p>${item[1].quantity * item[1].price}</p>
                    </div>
                  </div>
                );
              })}
            <div className="cartSummary">
              <strong>Total: ${totalPrice}</strong>
            </div>
          </div>
        )}
        <Snackbar
          open={notificationOpen}
          autoHideDuration={2000}
          onClose={setNotificationOpen}
          message={notificationItem + " added to cart"}
        />
      </div>
    </div>
  );
}

export default App;
