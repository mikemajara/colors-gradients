import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
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
    // event.target.setCustomValidity("");
    // event.target.setCustomValidity(
    //   closestColorName ? `Closest CSS color: ${closestColorName}` : ""
    // );
    // event.target.reportValidity();
    setColor(closestColorName ? closestColorName : value);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        value={color}
        onFocus={() => setShowPicker(true)}
        onBlur={(e) => {
          setShowPicker(false);
          handleInputChange(e);
        }}
      />
      {showPicker && (
        <Stack position="absolute" zIndex={1}>
          <Box position={"relative"} top={0} left={0}>
            <ChromePicker color={color} onChange={handleColorChange} />
          </Box>
        </Stack>
      )}
    </FormControl>
  );
};

export default ColorInput;
