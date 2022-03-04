import { useState } from "react";
import "./styles.css";
import { Exercise as Darkmode } from "./darkMode";
import { Exercise as Likebtn } from "./Likebtn";
import { Exercise as Cart } from "./cart";

export default function App() {
  return (
    <div className="App">
      <h1>Ex-11</h1>
      <hr />
      <Darkmode />
      <h1>Ex-12</h1>
      <hr />
      <Likebtn />
      <h1>Ex-13</h1>
      <hr />
      <Cart />
    </div>
  );
}
