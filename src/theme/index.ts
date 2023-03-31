import { extendTheme, Theme, ThemeConfig } from "@chakra-ui/react";
import { Button, IconButton } from "./button";
import { Input } from "./input";
import { Select } from "./select";

const fonts = {
  mono: `'Menlo', monospace`,
  heading: "Raleway",
  body: "Raleway",
};

const config: ThemeConfig = {
  initialColorMode: "light", // initialColorMode is the fallback if system color mode can't be resolved
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  // colors,
  shadows: {
    "white-lg":
      "0 10px 15px -3px var(--chakra-colors-gray-900), 0 4px 6px -2px var(--chakra-colors-gray-900)",
  },
  fonts,
  components: {
    Select,
    Input,
    Button,
    IconButton,
  },
});

export default theme;
