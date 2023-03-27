import { Flex } from "@chakra-ui/react";
import React from "react";
import GradientBox from "./gradient-box";
import { useAppStorage } from "../../store";

const GradientComponent = () => {
  const { state } = useAppStorage();

  const gradient = state
    .reduce((prev, current) => {
      const { direction, color1, color2 } = current;
      return prev + `linear-gradient(${direction}, ${color1}, ${color2}), `;
    }, "")
    .slice(0, -2);

  return (
    <Flex w="full" h={"50vh"}>
      <GradientBox gradient={gradient} />
    </Flex>
  );
};

export default GradientComponent;
