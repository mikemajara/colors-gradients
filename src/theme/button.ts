// theme.ts (tsx file with usage of StyleFunctions, see 4.)

const borderColor = "black";
const borderStyle = "solid";
const borderWidth = "1px";

export const Button = {
  // variants: {
  //   outline: {
  //     borderWidth,
  //     borderColor,
  //   },
  //   ghost: {
  //     borderWidth,
  //     borderStyle,
  //     borderColor: "transparent",
  //     _active: {
  //       borderStyle: "solid",
  //       borderWidth,
  //       borderColor,
  //     },
  //   },
  //   cancel: {
  //     _hover: {
  //       bg: "red.100",
  //       variant: "ghost",
  //     },
  //   },
  //   black: (props) => ({
  //     color: "white",
  //     bg: "black",
  //     _dark: {
  //       color: "black",
  //       bg: "white",
  //     },
  //   }),
  //   volume: {
  //     border: ".5px solid",
  //     bg: "white",
  //     _dark: {
  //       bg: "gray.800",
  //       _hover: {
  //         shadow: `2px 2px #718096`,
  //         textDecoration: "none",
  //       },
  //     },
  //     _hover: {
  //       // bg: "gray.100",
  //       shadow: "2px 2px",
  //       transform: "translateX(-2px) translateY(-2px)",
  //       transition: "all .2s ease-in-out",
  //       textDecoration: "none",
  //     },
  //   },
  // },
  // baseStyle: {
  //   fontWeight: "regular",
  // },
};

export const IconButton = Button;
