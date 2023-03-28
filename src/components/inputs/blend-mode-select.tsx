import React from "react";
import { Select } from "@chakra-ui/react";
import { useAppStorage } from "../../store";

type BlendModeSelectProps = {
  blendMode: string;
  setBlendMode: (blendMode: string) => void;
};

const BlendModeSelect: React.FC<BlendModeSelectProps> = () => {
  const {
    updateSettings,
    settings: { blendMode },
  } = useAppStorage();

  const blendModes = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ];

  const handleBlendModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ blendMode: e.target.value });
  };

  return (
    <Select value={blendMode as string} onChange={handleBlendModeChange}>
      {blendModes.map((mode, index) => (
        <option key={index} value={mode}>
          {mode}
        </option>
      ))}
    </Select>
  );
};

export default BlendModeSelect;
