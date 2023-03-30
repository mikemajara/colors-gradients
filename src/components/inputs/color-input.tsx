import React, { useState } from "react";
import {
  chakra,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Switch,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ChromePicker } from "react-color";
import { getClosestCSSColorName } from "../../utils/color-utils";

const ColorInput = ({ label, color, setColor }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [shouldFindClosest, setShouldFindClosest] = useState(false);

  const handleColorChange = (color) => {
    if (shouldFindClosest) setColor(getClosestCSSColorName(color.hex));
    else setColor(color.hex);
  };

  const toggleClosest = () => {
    setShouldFindClosest(!shouldFindClosest);
  };

  return (
    <FormControl>
      <HStack align={"center"}>
        <Text>{label}</Text>
        <Switch
          size="sm"
          checked={shouldFindClosest}
          onChange={toggleClosest}
        />
      </HStack>
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
            <chakra.div
              onClick={(e) => setShowPicker(false)}
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
            />
            <ChromePicker color={color} onChangeComplete={handleColorChange} />
          </Box>
        </Stack>
      )}
    </FormControl>
  );
};

export default ColorInput;
