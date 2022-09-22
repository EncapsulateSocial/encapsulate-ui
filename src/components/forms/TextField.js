import React from "react";

const TextField = ({ type = "", label = "" }) => {
  return <input className={`TextField`} type={type} placeholder={label} />;
};

export default TextField;
