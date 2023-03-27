import React from "react";
import GradientBox from "./gradient-box";

const GradientComponent = ({ gradient }) => {
  return (
    <div style={{ height: "200px", width: "200px" }}>
      <GradientBox
        color1={gradient[0]}
        color2={gradient[1]}
        color3={gradient[2]}
      />
    </div>
  );
};

export default GradientComponent;
