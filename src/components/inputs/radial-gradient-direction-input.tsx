import { Select, SelectProps } from "@chakra-ui/react";

type RadialGradientSelectProps = Omit<SelectProps, "children"> & {
  onGradientChange: (gradient: string) => void;
  direction: string;
};

const shapes = ["circle", "ellipse"];

const positions = [
  "center",
  "top",
  "bottom",
  "left",
  "right",
  "top left",
  "top right",
  "bottom left",
  "bottom right",
];

const RadialGradientSelect = ({
  onGradientChange,
  direction: value,
  ...rest
}: RadialGradientSelectProps) => {
  const options = [];

  shapes.forEach((shape) => {
    // sizes.forEach((size) => {
    positions.forEach((position) => {
      const direction = `${shape} at ${position}`;

      options.push(
        <option key={direction} value={direction}>
          {shape} at {position}
        </option>
      );
    });
    // });
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onGradientChange(event.target.value);
  };

  return (
    <Select onChange={handleChange} {...rest} value={value}>
      {options}
    </Select>
  );
};

export default RadialGradientSelect;
