import React from "react";
import { Button } from "@chakra-ui/react";
import { useAppStorage } from "../../store";
import ColorInput from "../inputs/color-input";
import { DirectionInput } from "../inputs/direction-input";

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
      {state?.map((combination, index) => (
        <div key={index} style={{ display: "flex", gap: "16px" }}>
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
          <Button
            mt={4}
            colorScheme="red"
            type="button"
            onClick={() => handleRemoveCombination(index)}
          >
            Remove Combination
          </Button>
        </div>
      ))}
      <Button
        mt={4}
        colorScheme="green"
        type="button"
        onClick={handleAddCombination}
      >
        Add Combination
      </Button>
      <Button mt={4} colorScheme="blue" type="submit">
        Generate Gradient
      </Button>
    </form>
  );
};

export default ColorFormComponent;
