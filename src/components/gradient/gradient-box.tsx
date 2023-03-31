import React from "react";
import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

const GradientBox = forwardRef((props, ref) => {
  const { gradient, blendMode = "unset" } = props;
  // console.log(`GradientBox:gradient`, gradient);
  return (
    <Box w="100%" h="100%" bg={gradient} bgBlendMode={blendMode} ref={ref} />
  );
});

export const GradientBoxNoRef = forwardRef((props, ref) => {
  const { gradient, blendMode = "unset" } = props;
  // console.log(`GradientBox:gradient`, gradient);
  return (
    <Box
      w="100%"
      h="100%"
      bg={gradient}
      bgBlendMode={blendMode}
      ref={ref ?? null}
    />
  );
});

export default GradientBox;
