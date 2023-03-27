import React, { useState, useRef } from "react";
import { Flex, Button, useToast } from "@chakra-ui/react";
import { IconDownload } from "../../icons";
import GradientBox from "./gradient-box";
import { useAppStorage } from "../../store";
import html2canvas from "html2canvas";

const GradientComponent = () => {
  const [canvasUrl, setCanvasUrl] = useState("");
  const { state } = useAppStorage();

  const toast = useToast();
  const canvasRef = useRef(null);

  const handleDownload = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      setCanvasUrl(canvas.toDataURL());
      const link = document.createElement("a");
      link.download = "gradient.png";
      link.href = canvas.toDataURL();
      link.click();
      toast({
        title: "Download started",
        description: "Your gradient has been downloaded.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const generateGradient = (state) => {
    const gradientString = state.map((combination) => {
      return `linear-gradient(${combination.direction}, ${combination.color1}, ${combination.color2})`;
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
        <GradientBox gradient={gradient} ref={canvasRef} />
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
