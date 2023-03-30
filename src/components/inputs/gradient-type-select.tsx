import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

type Props = {
  gradientType: string;
  onChange: (gradientType: string) => void;
};

const GradientTypeSelect = ({ gradientType, onChange }: Props) => {
  return (
    <FormControl>
      <FormLabel>Gradient type</FormLabel>
      <Select value={gradientType} onChange={(e) => onChange(e.target.value)}>
        <option value="linear-gradient">Linear Gradient</option>
        {/* <option value="radial-gradient">Radial Gradient</option> */}
      </Select>
    </FormControl>
  );
};

export default GradientTypeSelect;
