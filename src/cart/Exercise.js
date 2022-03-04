import { useState } from "react";
import "./styles.css";

export function Exercise() {
  const [listItem, setListItem] = useState([]);
  const items = [
    {
      id: 1,
      name: "apple🍎",
      quantity: 0,
      avq: false
    },
    {
      id: 2,
      name: "banana🍌",
      quantity: 0,
      avq: true
    },
    {
      id: 3,
      name: "grapes🍇",
      quantity: 0,
      avq: true
    },
    {
      id: 4,
      name: "orange🍊",
      quantity: 0,
      avq: true
    },
    {
      id: 5,
      name: "pear🍐",
      quantity: 0,
      avq: 100
    }
  ];
  const onClickHandler = (id) => {
    const curr = items.filter((item) => item.id === id);
    if (listItem.size === 0) {
      curr[0].quantity++;
      setListItem([...listItem, curr[0]]);
    } else {
      let flag = false;
      const newList = listItem.map((el) => {
        if (id === el.id) {
          flag = true;
          return { ...el, quantity: ++el.quantity };
        }
        return el;
      });
      setListItem(newList);
      if (!flag) {
        setListItem([...listItem, curr[0]]);
      }
    }
  };
  return (
    <div className="App">
      <ul>
        {items.map((item) => {
          return (
            <li className="card">
              {item.name}
              <button
                disabled={!item.avq}
                onClick={() => onClickHandler(item.id)}
              >
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <h3>CART - ITEMS</h3>
        <ul className="cart-wrapper">
          {listItem.map((item) => {
            return (
              <li className="cart-item">
                {item.name} Quantity:{" "}
                <span className="amt">{item.quantity}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
