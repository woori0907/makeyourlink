import React from "react";

export const Button = ({ text, icon }) => {
  return (
    <button>
      <img src={icon ? icon : ""} />
      {text}
    </button>
  );
};
