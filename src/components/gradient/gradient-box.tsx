import React from "react";
import { Box, Text, BoxProps, forwardRef } from "@chakra-ui/react";

const GradientBox = forwardRef((props, ref) => {
  const { gradient, blendMode = "unset" } = props;
  // console.log(`GradientBox:gradient`, gradient);
  return (
    <Box w="100%" h="100%" bg={gradient} bgBlendMode={blendMode} ref={ref} />
  );
});

export const GradientBoxWordClip = forwardRef((props, ref) => {
  const { gradient, blendMode = "unset", children } = props;
  return (
    <Box
      position="relative"
      display="inline-block"
      bg={gradient}
      bgBlendMode={blendMode}
      color="transparent"
      sx={{
        "-webkit-background-clip": "text",
        "background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "text-fill-color": "transparent",
      }}
    >
      {children}
    </Box>
  );
});

export default GradientBox;
