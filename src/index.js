import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = increment => {
    setCount(count + increment);
    if (increment === "reset") {
      setCount(0);
    }
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div class="button">
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
        <Button increment={"reset"} onClickFunction={incrementCount} />
      </div>
      <span style={{ border: "2px solid #green" }}>{count}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
