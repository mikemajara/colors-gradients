import React, { useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { getClosestCSSColorName } from "../../utils/color-utils";

const ColorFormComponent = ({ onSubmit }) => {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#000000");
  const [color3, setColor3] = useState("#000000");

  const handleColorChange = (e, setColor) => {
    const value = e.target.value;
    setColor(value);
    const closestColorName = getClosestCSSColorName(value);
    e.target.setCustomValidity("");
    e.target.setCustomValidity(
      closestColorName ? `Closest CSS color: ${closestColorName}` : ""
    );
    e.target.reportValidity();
    e.target.value = closestColorName ? closestColorName : value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      color1,
      color2,
      color3,
    });
  };

  return (
    <Box p="4">
      <form onSubmit={handleSubmit}>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <FormControl>
            <FormLabel>Color 1:</FormLabel>
            <Input
              type="text"
              value={color1}
              onChange={(e) => handleColorChange(e, setColor1)}
              onFocus={(e) => (e.target.type = "color")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Color 2:</FormLabel>
            <Input
              type="text"
              value={color2}
              onChange={(e) => handleColorChange(e, setColor2)}
              onFocus={(e) => (e.target.type = "color")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Color 3:</FormLabel>
            <Input
              type="text"
              value={color3}
              onChange={(e) => handleColorChange(e, setColor3)}
              onFocus={(e) => (e.target.type = "color")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </FormControl>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="4">
          <Input type="submit" value="Generate Gradient" />
        </Flex>
      </form>
    </Box>
  );
};

export default ColorFormComponent;
