import React from "react";
import { Box } from "@chakra-ui/react";

const GradientBox = ({ directions, colors }) => {
  const gradient = `linear-gradient(${directions.join(", ")}, ${colors.join(
    ", "
  )})`;

  return <Box w="100%" h="100%" borderRadius="md" bg={gradient} />;
};

export default GradientBox;
