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
      <Stack>
        <HStack align={"center"}>
          <Text>Snap to CSS color</Text>
          <Switch
            size="sm"
            checked={shouldFindClosest}
            onChange={toggleClosest}
          />
        </HStack>
        <Input
          type="text"
          variant="theme"
          value={color}
          onFocus={() => setShowPicker(!showPicker)}
          onChange={(e) => setColor(e.target.value)}
        />
        {showPicker && (
          <Stack position="absolute" top={16}>
            <Box
              position={"relative"}
              zIndex={2}
              borderRadius="lg"
              overflow={"hidden"}
              border="1px solid black"
            >
              <chakra.div
                onClick={(e) => setShowPicker(false)}
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
              />
              <ChromePicker
                color={color}
                onChangeComplete={handleColorChange}
              />
            </Box>
          </Stack>
        )}
      </Stack>
    </FormControl>
  );
};

export default ColorInput;
