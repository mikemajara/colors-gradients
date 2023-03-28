import React from "react";
import { Button, IconButton, Stack } from "@chakra-ui/react";
import {
  useAppStorage,
  SimpleCombination,
  TransparentCombination,
} from "../../store";
import ColorInput from "../inputs/color-input";
import { DirectionInput } from "../inputs/direction-input";
import { IconAdd, IconShuffle, IconTrash } from "../../icons";
import PercentageInput from "../inputs/percentage-input";
import BlendModeSelect from "../inputs/blend-mode-select";
import {
  getRandomDirection,
  getRandomHexColor,
  getRandomPercentage,
} from "../../utils/color-utils";
import { useTransparentStorage } from "../../store/transparent";

const ColorFormComponentTransparency = () => {
  const state = useTransparentStorage((state) => state.transparent);
  const { addTransparentCombination, removeCombination, updateCombination } =
    useTransparentStorage();

  const handleAddCombination = () => {
    const combination: TransparentCombination = {
      direction: "to right",
      color: "#000000",
      percentage: "50%",
    };
    addTransparentCombination(combination);
  };

  const handleRandomCombination = (index: number) => {
    const combination: TransparentCombination = {
      direction: getRandomDirection(),
      color: getRandomHexColor(),
      percentage: getRandomPercentage(),
    };
    updateCombination("transparent", index, combination);
  };

  const handleRemoveCombination = (index: number) => {
    removeCombination("transparent", index);
  };

  const handleDirectionChange = (index: number, direction: string) => {
    updateCombination("transparent", index, { ...state[index], direction });
  };

  const handleColorChange = (index: number, color: string) => {
    updateCombination("transparent", index, {
      ...state[index],
      color,
    });
  };

  const handlePercentageChange = (index: number, percentage: string) => {
    updateCombination("transparent", index, {
      ...state[index],
      percentage,
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
              label={"Color"}
              color={combination.color}
              setColor={(color) => handleColorChange(index, color)}
            />
            <PercentageInput
              percentage={combination.percentage}
              setPercentage={(percentage) =>
                handlePercentageChange(index, percentage)
              }
            />
            <IconButton
              colorScheme="red"
              variant="outline"
              type="button"
              onClick={() => handleRemoveCombination(index)}
              icon={<IconTrash />}
              aria-label="trash"
            />
            <IconButton
              colorScheme="blue"
              variant="outline"
              type="button"
              onClick={() => handleRandomCombination(index)}
              icon={<IconShuffle />}
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

export default ColorFormComponentTransparency;
