import React from "react";

const TextField = ({ type, value, label }) => {
  return (
    <input
      className={`TextField`}
      type={type}
      value={value}
      placeholder={label}
    />
  );
};

export default TextField;
