import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
  Input,
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/layout/Container";
import { Main } from "../components/layout/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import GradientBox from "../components/gradient/gradient-box";
import { useState } from "react";

import dynamic from "next/dynamic";
// import GradientComponent from "../components/gradient/gradient-component-transparency";

const ColorFormComponent = dynamic(
  () => import("../components/forms/color-form-component-transparency"),
  { ssr: false }
);

const GradientComponent = dynamic(
  () => import("../components/gradient/gradient-component-word-clip"),
  { ssr: false }
);

const Index = () => {
  const [word, setWord] = useState("");
  const [fontSize, setFontSize] = useState("");
  return (
    <Container minH="100vh">
      <Navbar />
      <Main>
        <Stack direction={["column"]}>
          <HStack>
            <Input
              variant="theme"
              type="text"
              value={word}
              placeholder={"Type a word"}
              onChange={(e) => setWord(e.target.value)}
            />
            <Input
              variant="theme"
              type={"number"}
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </HStack>
          <GradientComponent
            word={
              <Text
                fontWeight={"extrabold"}
                fontSize={fontSize}
                textAlign="center"
              >
                {word}
              </Text>
            }
          />
          <ColorFormComponent />
        </Stack>
      </Main>

      <DarkModeSwitch />
      <Footer>{/* <Text>Next ❤️ Chakra ❤️ GPT</Text> */}</Footer>
    </Container>
  );
};

export default Index;
