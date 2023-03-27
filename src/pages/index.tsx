import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/layout/Container";
import { Main } from "../components/layout/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import GradientBox from "../components/gradient/gradient-box";
import { useState } from "react";
import GradientComponent from "../components/gradient/gradient-component";

import dynamic from "next/dynamic";

const ColorFormComponent = dynamic(
  () => import("../components/forms/color-form-component"),
  { ssr: false }
);

const Index = () => {
  const [gradient, setGradient] = useState(["#FF0000"]);

  const handleColorChange = (newGradient) => {
    setGradient(newGradient);
  };

  const handleDirectionChange = (direction) => {
    setGradient([direction, ...gradient.slice(1)]);
  };

  return (
    <Container height="100vh">
      <Header w="full">Header</Header>
      <Main border="1px solid black">
        <Stack direction={["column"]}>
          <GradientComponent gradient={gradient} />
          <ColorFormComponent
          // onSubmit={handleColorChange}
          // onDirectionChange={handleDirectionChange}
          />
        </Stack>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra ❤️ GPT</Text>
      </Footer>
    </Container>
  );
};

export default Index;
