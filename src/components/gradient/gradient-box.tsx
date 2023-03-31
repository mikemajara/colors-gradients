import React from "react";
import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

const GradientBox = forwardRef((props, ref) => {
  const { gradient, blendMode = "unset" } = props;
  // console.log(`GradientBox:gradient`, gradient);
  return (
    <Box
      w="100%"
      h="100%"
      // bg={gradient}
      // bgBlendMode={blendMode}
      position={"relative"}
      ref={ref}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: gradient,
        bgBlendMode: blendMode,
        transform: "rotate(45deg)",
      }}
    />
  );
});

export default GradientBox;
