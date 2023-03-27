import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export const DirectionInput = ({
  direction,
  setDirection,
  onDirectionChange,
}) => {
  const directions = [
    "to top",
    "to top right",
    "to right",
    "to bottom right",
    "to bottom",
    "to bottom left",
    "to left",
    "to top left",
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setDirection(value);
    onDirectionChange(value);
  };

  return (
    <FormControl>
      <FormLabel>Direction</FormLabel>
      <Select value={direction} onChange={handleInputChange}>
        {directions.map((dir) => (
          <option key={dir} value={dir}>
            {dir}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
