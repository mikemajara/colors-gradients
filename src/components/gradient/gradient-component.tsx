import React from "react";
import GradientBox from "./gradient-box";

const GradientComponent = ({ gradient }) => {
  const directions = gradient.length > 2 ? gradient.slice(0, -2) : ["to right"];
  const colors = gradient.slice(-2);

  return (
    <div style={{ height: "200px", width: "200px" }}>
      <GradientBox directions={directions} colors={colors} />
    </div>
  );
};

export default GradientComponent;
