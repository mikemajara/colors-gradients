import { Select, SelectProps } from "@chakra-ui/react";

type RadialGradientSelectProps = Omit<SelectProps, "children"> & {
  onGradientChange: (gradient: string) => void;
};

const shapes = ["circle", "ellipse"];

const sizes = [
  "closest-side",
  "closest-corner",
  "farthest-side",
  "farthest-corner",
  "contain",
  "cover",
];

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
  ...rest
}: RadialGradientSelectProps) => {
  const options = [];

  shapes.forEach((shape) => {
    sizes.forEach((size) => {
      positions.forEach((position) => {
        const gradient = `${shape} ${size} at ${position}`;

        if (!!shape || !!size)
          options.push(
            <option key={gradient} value={gradient}>
              {shape} {size} at {position}
            </option>
          );
      });
    });
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onGradientChange(event.target.value);
  };

  return (
    <Select onChange={handleChange} {...rest}>
      {options}
    </Select>
  );
};

export default RadialGradientSelect;
