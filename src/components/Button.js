import React from "react";

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return (
    <button
      style={{
        margin: "10px",
        padding: "10px 20px",
        color: "#61c7619d",
        border: "1px dashed #999",
        boxShadow: "0 0 10px #61c7619d"
      }}
      onClick={handleClick}
    >
      +{increment}
    </button>
  );
};

export default Button;
