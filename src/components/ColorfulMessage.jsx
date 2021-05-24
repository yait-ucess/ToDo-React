import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "30px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
