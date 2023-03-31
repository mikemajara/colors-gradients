import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const theme = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "white",

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: "gray.600",
      background: "gray.800",
    },
  },
  addon: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "gray.200",
    borderRadius: "full",
    color: "gray.500",

    _dark: {
      borderColor: "gray.600",
      background: "gray.600",
      color: "gray.400",
    },
  },
});

const figma = definePartsStyle({
  field: {
    borderRadius: "4px",
    borderColor: "gray.300",
    _hover: {
      borderColor: "gray.400",
    },
    _focus: {
      borderColor: "blue.500",
      boxShadow: "0 0 0 1px rgba(37, 99, 235, 0.5)",
    },
  },
  // sizes: {
  //   md: {
  //     field: {
  //       fontSize: "1rem",
  //       padding: "0.5rem 1rem",
  //     },
  //   },
  // },
  // defaultProps: {
  //   size: "md",
  // },
});

export const Input = defineMultiStyleConfig({
  variants: { theme, figma },
  defaultProps: {
    size: "md",
  },
});
