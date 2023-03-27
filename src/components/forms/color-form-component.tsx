import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";
import { ChromePicker } from "react-color";
import { getClosestCSSColorName } from "../../utils/color-utils";
import ColorInput from "../inputs/color-input";
import { DirectionInput } from "../inputs/direction-input";

const ColorFormComponent = ({ onSubmit, onDirectionChange }) => {
  const [direction, setDirection] = useState("to right");
  const [colors, setColors] = useState(["#000000", ""]);

  const handleColorChange = (index, color) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;
      return newColors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const gradient = [direction, ...colors.filter(Boolean)];
    onSubmit(gradient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack align="start">
        <DirectionInput
          direction={direction}
          setDirection={setDirection}
          onDirectionChange={onDirectionChange}
        />
        <ColorInput
          label={"Color 1"}
          color={colors[0]}
          setColor={(color) => handleColorChange(0, color)}
        />
        <ColorInput
          label={"Color2"}
          color={colors[1]}
          setColor={(color) => handleColorChange(1, color)}
        />
      </HStack>
      <Button mt={4} colorScheme="blue" type="submit">
        Generate Gradient
      </Button>
    </form>
  );
};

export default ColorFormComponent;
