import React, { useState } from "react";
import {
  chakra,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ChromePicker } from "react-color";
import { getClosestCSSColorName } from "../../utils/color-utils";

const ColorInput = ({ label, color, setColor }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const closestColorName = getClosestCSSColorName(value);
    // setColor(closestColorName ? closestColorName : value);
    setColor(value);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        value={color}
        onFocus={() => setShowPicker(!showPicker)}
        onBlur={(e) => {
          // setShowPicker(false);
          // handleInputChange(e);
        }}
      />
      {showPicker && (
        <Stack position="absolute">
          <Box position={"relative"} zIndex={2}>
            {/* <chakra.div position="absolute" zIndex={2}> */}
            <chakra.div
              onClick={(e) => setShowPicker(false)}
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
            />
            <ChromePicker color={color} onChangeComplete={handleColorChange} />
            {/* </chakra.div> */}
          </Box>
        </Stack>
      )}
    </FormControl>
  );
};

export default ColorInput;
