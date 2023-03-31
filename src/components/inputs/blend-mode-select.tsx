import React from "react";
import { Select } from "@chakra-ui/react";
import { useTransparentStorage } from "../../store/transparent";

const BlendModeSelect = () => {
  const {
    updateSettings,
    settings: { blendMode },
  } = useTransparentStorage();

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
    "unset",
  ];

  const handleBlendModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ blendMode: e.target.value });
  };

  return (
    <Select
      value={blendMode as string}
      onChange={handleBlendModeChange}
      variant="theme"
    >
      {blendModes.map((mode, index) => (
        <option key={index} value={mode}>
          {mode}
        </option>
      ))}
    </Select>
  );
};

export default BlendModeSelect;
