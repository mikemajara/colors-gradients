import React, { useState, useRef } from "react";
import { Flex, Button, useToast, HStack } from "@chakra-ui/react";
import { IconDownload } from "../../icons";
import GradientBox from "./gradient-box";
import { useAppStorage } from "../../store";
import domtoimage from "dom-to-image";
import { useTransparentStorage } from "../../store/transparent";
import CopyButtonComponent from "../inputs/copy-button-component";

const GradientComponent = () => {
  const [canvasUrl, setCanvasUrl] = useState("");
  const {
    transparent: state,
    settings: { blendMode = "unset" },
  } = useTransparentStorage();

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

  const generateGradient = (state) => {
    const gradientString = state
      ?.filter((e) => !e.hidden)
      .map(({ direction, color, percentage, gradientType }) => {
        const percentageNumber = parseInt(percentage.replace("%", ""));
        return `${gradientType}(${direction}, ${color} ${percentage}, transparent 100%)`;
      });
    return `${gradientString.join(", ")}; background-blend-mode: ${blendMode};`;
  };
  const gradient = generateGradient(state);

  return (
    <>
      <Flex
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
      </Flex>
      <HStack justify="start" mt={8}>
        <Button
          colorScheme="green"
          leftIcon={<IconDownload />}
          onClick={handleDownload}
        >
          Download
        </Button>
        <CopyButtonComponent value={gradient} />
      </HStack>
    </>
  );
};

export default GradientComponent;
