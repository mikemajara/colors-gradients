import React from "react";
import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

type Props = {
  percentage: string;
  setPercentage: (percentage: string) => void;
};

const PercentageInput = ({ percentage, setPercentage }: Props) => {
  const handleSliderChange = (value: number) => {
    setPercentage(`${value}%`);
  };

  return (
    <Flex direction="column" alignItems="center">
      <Text fontSize="sm">{percentage}</Text>
      <Slider
        aria-label="percentage-slider"
        min={0}
        max={100}
        value={Number.parseInt(percentage.replace("%", ""))}
        onChange={handleSliderChange}
        width="100px"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};

export default PercentageInput;
