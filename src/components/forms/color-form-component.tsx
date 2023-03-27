import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { ChromePicker } from "react-color";
import { getClosestCSSColorName } from "../../utils/color-utils";

const ColorInput = ({ color, setColor }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(handleInputChange(color.hex));
  };

  const handleInputChange = (value) => {
    console.log(`input value:`, value);
    const closestColorName = getClosestCSSColorName(value);
    console.log(`closest value:`, closestColorName);
    return closestColorName ? closestColorName : value;
  };

  return (
    <FormControl>
      <FormLabel>{`Color ${color}`}</FormLabel>
      <Input
        type="text"
        value={color}
        onChange={handleColorChange}
        onFocus={() => setShowPicker(true)}
        onBlur={() => setShowPicker(false)}
      />
      {showPicker && (
        <ChromePicker color={color} onChange={handleColorChange} />
      )}
    </FormControl>
  );
};

const ColorFormComponent = ({ onSubmit }) => {
  const [colors, setColors] = useState(["#000000", "", "", ""]);

  const handleColorChange = (index, color) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;
      return newColors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const gradient = colors.filter(Boolean);
    onSubmit(gradient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <ColorInput
          color={colors[0]}
          setColor={(color) => handleColorChange(0, color)}
        />
        <ColorInput
          color={colors[1]}
          setColor={(color) => handleColorChange(1, color)}
        />
      </HStack>
      <HStack>
        <ColorInput
          color={colors[2]}
          setColor={(color) => handleColorChange(2, color)}
        />
        <ColorInput
          color={colors[3]}
          setColor={(color) => handleColorChange(2, color)}
        />
      </HStack>
      <Button mt={4} colorScheme="blue" type="submit">
        Generate Gradient
      </Button>
    </form>
  );
};

export default ColorFormComponent;
