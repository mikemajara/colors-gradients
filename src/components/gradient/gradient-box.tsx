import React from "react";
import { Box } from "@chakra-ui/react";

const GradientBox = ({ gradient }) => {
  return <Box w="100%" h="100%" bg={gradient} />;
};

export default GradientBox;
