import React from "react";

export interface IMenuProps {
  title: string;
  list: {
    item: string,
    image: string,
    price: Number | string,
    description: string
  }[];
  addToCart: (val1: string, val2: number) => any;
}

export const MenuSection = (props: IMenuProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="row">
        {props.list.map((item, i) => {
          return (
            <div className="menuItem" key={i}>
              <img className="menuItemImage" src={item.image} />
              <div className="menuItemContent">
                <div className="menuItemHeader">
                  <h3>{item.item}</h3>
                  <button
                    className="addToCartButton"
                    onClick={() => props.addToCart(item.item, item.price)}
                  >
                    +
                  </button>
                </div>
                <p>${item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
