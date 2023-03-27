import React from "react";
import { Box } from "@chakra-ui/react";

const GradientBox = ({ color1, color2, color3 }) => {
  const gradientColors = [color1, color2, color3].filter(Boolean);
  const gradient = `linear-gradient(to right, ${gradientColors.join(", ")})`;

  return <Box w="100%" h="100%" borderRadius="md" bg={gradient} />;
};

export default GradientBox;
