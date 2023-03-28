import React from "react";
import { Button, IconButton, Stack } from "@chakra-ui/react";
import {
  useAppStorage,
  SimpleCombination,
  CompositeCombination,
} from "../../store";
import ColorInput from "../inputs/color-input";
import { DirectionInput } from "../inputs/direction-input";
import { IconAdd, IconTrash } from "../../icons";
import PercentageInput from "../inputs/percentage-input";
import BlendModeSelect from "../inputs/blend-mode-select";

const ColorFormComponentComposite = () => {
  const state = useAppStorage((state) => state.composite);
  const { addCompositeCombination, removeCombination, updateCombination } =
    useAppStorage();

  const handleAddCombination = () => {
    const combination: CompositeCombination = {
      direction: "to right",
      color1: "#000000",
      percentage1: "50%",
      color2: "",
      percentage2: "50%",
    };
    addCompositeCombination(combination);
  };

  const handleRemoveCombination = (index: number) => {
    removeCombination("composite", index);
  };

  const handleDirectionChange = (index: number, direction: string) => {
    updateCombination("composite", index, { ...state[index], direction });
  };

  const handleColorChange = (
    index: number,
    color: string,
    colorType: "color1" | "color2"
  ) => {
    updateCombination("composite", index, {
      ...state[index],
      [colorType]: color,
    });
  };

  const handlePercentageChange = (
    index: number,
    percentage: string,
    percentageType: "percentage1" | "percentage2"
  ) => {
    updateCombination("composite", index, {
      ...state[index],
      [percentageType]: percentage,
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
        <Stack>
          <BlendModeSelect />
        </Stack>
        <Stack direction={["row"]} align="center">
          <Button
            colorScheme="green"
            type="button"
            onClick={handleAddCombination}
            leftIcon={<IconAdd />}
          >
            Add Combination
          </Button>
          <Button colorScheme="blue" type="submit">
            Generate Gradient
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default ColorFormComponentComposite;
