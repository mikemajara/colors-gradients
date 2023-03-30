import React from "react";
import { Button, IconButton, Stack } from "@chakra-ui/react";
import { TransparentCombination } from "../../store/transparent";
import ColorInput from "../inputs/color-input";
import { LinearGradientDirectionInput } from "../inputs/linear-gradient-direction-input";
import { IconAdd, IconShuffle, IconTrash } from "../../icons";
import PercentageInput from "../inputs/percentage-input";
import BlendModeSelect from "../inputs/blend-mode-select";
import {
  getRandomDirection,
  getRandomGradientType,
  getRandomHexColor,
  getRandomPercentage,
} from "../../utils/color-utils";
import { useTransparentStorage } from "../../store/transparent";
import GradientTypeSelect from "../inputs/gradient-type-select";
import RadialGradientSelect from "../inputs/radial-gradient-direction-input";

const ColorFormComponentTransparency = () => {
  const state = useTransparentStorage((state) => state.transparent);
  const { addTransparentCombination, removeCombination, updateCombination } =
    useTransparentStorage();

  const handleAddCombination = () => {
    const combination: TransparentCombination = {
      gradientType: "linear-gradient",
      direction: "to right",
      color: "#000000",
      percentage: "50%",
    };
    addTransparentCombination(combination);
  };

  const handleRandomCombination = (index: number) => {
    const combination: TransparentCombination = {
      gradientType: getRandomGradientType(),
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

  const handleGradientTypeChange = (gradientType: string, index) => {
    updateCombination("transparent", index, {
      ...state[index],
      gradientType,
    });
  };

  const handleClickFullRandomize = () => {
    state.forEach((e, i) => handleRandomCombination(i));
  };

  const handleGradientChange = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {state?.map((combination, index) => (
          <Stack direction="row" key={index} align="end">
            <GradientTypeSelect
              gradientType={combination.gradientType}
              onChange={(e) => handleGradientTypeChange(e, index)}
            />
            {combination.gradientType == "linear-gradient" ? (
              <LinearGradientDirectionInput
                direction={combination.direction}
                onDirectionChange={(direction) =>
                  handleDirectionChange(index, direction)
                }
              />
            ) : (
              <RadialGradientSelect
                onGradientChange={(direction) =>
                  handleDirectionChange(index, direction)
                }
              />
            )}
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
          <Button colorScheme="blue" onClick={handleClickFullRandomize}>
            Generate Gradient
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default ColorFormComponentTransparency;
