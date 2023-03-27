import { Flex } from "@chakra-ui/react";
import React from "react";
import GradientBox from "./gradient-box";

const GradientComponent = ({ gradient }) => {
  const directions = gradient.length > 2 ? gradient.slice(0, -2) : ["to right"];
  const colors = gradient.slice(-2);

  return (
    <Flex w="full" h={"50vh"}>
      <GradientBox directions={directions} colors={colors} />
    </Flex>
  );
};

export default GradientComponent;
