import React, { useState, useRef } from "react";
import { Flex, Button, useToast } from "@chakra-ui/react";
import { IconDownload } from "../../icons";
import GradientBox from "./gradient-box";
import { useAppStorage } from "../../store";
import domtoimage from "dom-to-image";

const GradientComponent = () => {
  const [canvasUrl, setCanvasUrl] = useState("");
  const {
    composite: state,
    settings: { blendMode = "unset" },
  } = useAppStorage();

  const toast = useToast();
  const canvasRef = useRef(null);

  const handleDownload = () => {
    domtoimage
      .toPng(canvasRef.current)
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
    const gradientString = state?.map(({ direction, color1, color2 }) => {
      return direction && color1 && color2
        ? `linear-gradient(${direction}, ${color1}, ${color2})`
        : ``;
    });
    return gradientString.join(", ");
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
      <Flex justify="center" mt={8}>
        <Button
          colorScheme="green"
          leftIcon={<IconDownload />}
          onClick={handleDownload}
        >
          Download Gradient
        </Button>
      </Flex>
    </>
  );
};

export default GradientComponent;
