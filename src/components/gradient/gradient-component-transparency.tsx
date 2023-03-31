import React, { useState, useRef } from "react";
import {
  Flex,
  Button,
  useToast,
  HStack,
  Stack,
  Wrap,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { IconDownload, IconSave } from "../../icons";
import GradientBox, { GradientBoxNoRef } from "./gradient-box";
import { useAppStorage } from "../../store";
import domtoimage from "dom-to-image";
import { useTransparentStorage } from "../../store/transparent";
import CopyButtonComponent from "../inputs/copy-button-component";
import { useSavedStorage } from "../../store/saved";
import { shallow } from "zustand/shallow";
const GradientComponent = () => {
  const {
    transparent: state,
    settings,
    settings: { blendMode = "unset" },
    removeCombination,
    addCombination,
  } = useTransparentStorage();
  const { addSavedCombination, removeCombination: removeSavedCombination } =
    useSavedStorage();
  const saved = useSavedStorage((state) => state.saved, shallow);
  const toast = useToast();
  const canvasRef = useRef(null);

  const handleDownload = () => {
    domtoimage
      .toPng(canvasRef.current, { bgcolor: "white" })
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = "gradient.png";
        link.href = dataUrl;
        link.click();
        toast({
          title: "Download started",
          description: "Your gradient has been downloaded.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const handleSave = () => {
    addSavedCombination([...state], { ...settings });
  };

  const handleRecover = (combinations, settings) => {
    state.forEach((e, i) => removeCombination("transparent", i));
    combinations.forEach((e, i) => addCombination({ ...e }));
  };

  const generateGradient = (state, settings) => {
    console.log(`state:`, state);
    let gradientString =
      state
        ?.filter((e) => !e.hidden)
        .map(({ direction, color, percentage, gradientType }) => {
          const percentageNumber = parseInt(percentage.replace("%", ""));
          return `${gradientType}(${direction}, ${color} ${percentage}, transparent 100%)`;
        })
        .join(", ") + ";";
    if (settings?.blendMode)
      gradientString += `background-blend-mode: ${settings.blendMode};`;
    return gradientString;
  };
  const gradient = generateGradient(state, settings);

  return (
    <Stack>
      <Stack
        justify="center"
        align="center"
        h="50vh"
        borderWidth="1px"
        borderColor={"gray.700"}
        borderStyle="solid"
        borderRadius={"xl"}
        overflow="hidden"
      >
        <GradientBox
          gradient={gradient}
          blendMode={blendMode}
          ref={canvasRef}
        />
      </Stack>
      <HStack>
        {saved.map((e, i) => (
          <Box
            h={10}
            w={10}
            borderRadius={"lg"}
            overflow="hidden"
            onClick={() => {
              removeSavedCombination("saved", i);
            }}
          >
            <GradientBoxNoRef
              gradient={generateGradient(e.combinations, e.settings)}
              blendMode={e.settings.blendMode}
            />
          </Box>
        ))}
      </HStack>
      <HStack justify="start" mt={8}>
        <IconButton
          colorScheme="green"
          icon={<IconDownload />}
          onClick={handleDownload}
          aria-label={"download"}
        />
        <IconButton
          colorScheme="blue"
          icon={<IconSave />}
          onClick={handleSave}
          aria-label={"save"}
        />
        <CopyButtonComponent value={gradient} />
      </HStack>
    </Stack>
  );
};

export default GradientComponent;
