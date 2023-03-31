import React from "react";
import { Button, IconButton, Stack } from "@chakra-ui/react";
import { useAppStorage, SimpleCombination } from "../../store";
import ColorInput from "../inputs/color-input";
import { LinearGradientDirectionInput } from "../inputs/linear-gradient-direction-input";
import { IconAdd, IconTrash } from "../../icons";

const ColorFormComponentSimple = () => {
  const state = useAppStorage((state) => state.simple);
  const { addSimpleCombination, removeCombination, updateCombination } =
    useAppStorage();

  const handleAddCombination = () => {
    const combination: SimpleCombination = {
      direction: "to right",
      color1: "#000000",
      color2: "",
    };
    addSimpleCombination(combination);
  };

  const handleRemoveCombination = (index: number) => {
    removeCombination("simple", index);
  };

  const handleDirectionChange = (index: number, direction: string) => {
    updateCombination("simple", index, { ...state[index], direction });
  };

  const handleColorChange = (
    index: number,
    color: string,
    colorType: "color1" | "color2"
  ) => {
    updateCombination("simple", index, {
      ...state[index],
      [colorType]: color,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {state?.map((combination, index) => (
          <Stack direction="row" key={index} align="end">
            <LinearGradientDirectionInput
              direction={combination.direction}
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

export default ColorFormComponentSimple;
