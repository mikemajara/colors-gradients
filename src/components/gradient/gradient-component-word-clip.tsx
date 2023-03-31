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
import GradientBox, { GradientBoxWordClip } from "./gradient-box";
import { useAppStorage } from "../../store";
import domtoimage from "dom-to-image";
import { useTransparentStorage } from "../../store/transparent";
import CopyButtonComponent from "../inputs/copy-button-component";
import { useSavedStorage } from "../../store/saved";
import { shallow } from "zustand/shallow";

const GradientComponentWordClip = ({ word }) => {
  const {
    combinations,
    settings,
    settings: { blendMode = "unset" },
    removeCombination,
    addCombination,
  } = useTransparentStorage();
  // const combinations = useTransparentStorage(
  //   (state) => state.combinations,
  //   shallow
  // );
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
    addSavedCombination([...combinations], { ...settings });
  };

  const handleRecover = (savedCombinations, settings) => {
    combinations.forEach((e, i) => {
      removeCombination(0);
    });
    savedCombinations.forEach((e, i) => addCombination(e));
  };
  console.log(`combinations length: `, combinations);
  const generateGradient = (state, settings) => {
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
  const gradient = generateGradient(combinations, settings);

  return (
    <Stack>
      <Stack
        justify="center"
        align="center"
        minH="50vh"
        h="auto"
        // borderWidth="1px"
        // borderColor={"gray.700"}
        // borderStyle="solid"
        borderRadius={"xl"}
        overflow="hidden"
      >
        <GradientBoxWordClip
          gradient={gradient}
          blendMode={blendMode}
          ref={canvasRef}
        >
          {word}
        </GradientBoxWordClip>
      </Stack>
      <HStack>
        {saved.map((e, i) => (
          <Box
            h={10}
            w={10}
            borderRadius={"lg"}
            overflow="hidden"
            onClick={() => {
              // removeSavedCombination("saved", i);
              handleRecover(e.combinations, e.settings);
            }}
          >
            <GradientBox
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

export default GradientComponentWordClip;
