import { useState } from "react";
import "./styles.css";
let items = [
  {
    id: 1,
    post: " This is line number 1",
    likes: 0
  },
  {
    id: 2,
    post: " This is line number 2",
    likes: 0
  },
  {
    id: 3,
    post: " This is line number 3",
    likes: 0
  },
  {
    id: 4,
    post: " This is line number 4",
    likes: 0
  }
];
export function Exercise() {
  const [likes, setLikes] = useState(0);
  const liked = (id) => {
    let temp = items.map((item) => {
      if (item.id === id) {
        return { ...item, likes: ++item.likes };
      }
      return item;
    });
    setLikes(temp);
  };
  return (
    <div className="App">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.post}
              <button onClick={() => liked(item.id)}>
                <span role="img" alt="like">
                  👍
                </span>
              </button>

              {item.likes}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
