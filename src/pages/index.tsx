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
import GradientComponent from "../components/gradient/gradient-component";
import ColorFormComponent from "../components/forms/color-form-component";
import { useState } from "react";

const Index = () => {
  const [gradient, setGradient] = useState(["#FF0000", "#00FF00", "#0000FF"]);

  const handleColorChange = (newGradient) => {
    setGradient(newGradient);
  };
  return (
    <Container height="100vh">
      <Header w="full">Header</Header>
      <Main border="1px solid black">
        <Stack direction={["column"]}>
          <ColorFormComponent onSubmit={handleColorChange} />
          <GradientComponent gradient={gradient} />
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
