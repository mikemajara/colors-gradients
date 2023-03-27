import React from "react";
import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

const GradientBox = forwardRef((props, ref) => {
  const { gradient } = props;
  return <Box w="100%" h="100%" bg={gradient} ref={ref} />;
});

export default GradientBox;
