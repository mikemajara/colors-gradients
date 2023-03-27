import React from "react";
import { Button, IconButton, Stack } from "@chakra-ui/react";
import { useAppStorage } from "../../store";
import ColorInput from "../inputs/color-input";
import { DirectionInput } from "../inputs/direction-input";
import { IconAdd, IconTrash } from "../../icons";

const ColorFormComponent = () => {
  const { state, addCombination, removeCombination, updateCombination } =
    useAppStorage();

  const handleAddCombination = () => {
    addCombination({ direction: "to right", color1: "#000000", color2: "" });
  };

  const handleRemoveCombination = (index) => {
    removeCombination(index);
  };

  const handleDirectionChange = (index, direction) => {
    updateCombination(index, { ...state[index], direction });
  };

  const handleColorChange = (index, color, colorType) => {
    updateCombination(index, { ...state[index], [colorType]: color });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {state?.map((combination, index) => (
          <Stack direction="row" key={index} align="end">
            <DirectionInput
              direction={combination.direction}
              setDirection={(direction) =>
                handleDirectionChange(index, direction)
              }
              onDirectionChange={(direction) =>
                handleDirectionChange(index, direction)
              }
            />
            <ColorInput
              label={"Color 1"}
              color={combination.color1}
              setColor={(color) => handleColorChange(index, color, "color1")}
            />
            <ColorInput
              label={"Color 2"}
              color={combination.color2}
              setColor={(color) => handleColorChange(index, color, "color2")}
            />
            <IconButton
              colorScheme="red"
              type="button"
              onClick={() => handleRemoveCombination(index)}
              icon={<IconTrash />}
              aria-label="trash"
            />
          </Stack>
        ))}
        <Stack direction={["row"]} align="center">
          <Button
            colorScheme="green"
            type="button"
            onClick={handleAddCombination}
            leftIcon={<IconAdd />}
          >
            Add Combination
          </Button>
          {/* <Button colorScheme="blue" type="submit">
            Generate Gradient
          </Button> */}
        </Stack>
      </Stack>
    </form>
  );
};

export default ColorFormComponent;
