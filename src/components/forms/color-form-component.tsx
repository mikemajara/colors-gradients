import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChromePicker } from "react-color";

const ColorInput = ({ color, setColor }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <FormControl>
      <FormLabel>{`Color ${color}`}</FormLabel>
      <Input
        type="text"
        value={color}
        onChange={(event) => setColor(event.target.value)}
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
  const [colors, setColors] = useState(["#000000", "", ""]);

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
      <ColorInput
        color={colors[0]}
        setColor={(color) => handleColorChange(0, color)}
      />
      <ColorInput
        color={colors[1]}
        setColor={(color) => handleColorChange(1, color)}
      />
      <ColorInput
        color={colors[2]}
        setColor={(color) => handleColorChange(2, color)}
      />
      <Button mt={4} colorScheme="blue" type="submit">
        Generate Gradient
      </Button>
    </form>
  );
};

export default ColorFormComponent;
