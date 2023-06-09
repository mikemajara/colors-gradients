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
import { Navbar } from "../components/layout/navbar";
import GradientBox from "../components/gradient/gradient-box";
import { useState } from "react";

import dynamic from "next/dynamic";
import GradientComponent from "../components/gradient/gradient-component-simple";

const ColorFormComponent = dynamic(
  () => import("../components/forms/color-form-component-simple"),
  { ssr: false }
);

const Index = () => {
  return (
    <Container height="100vh">
      <Navbar />
      <Main border="1px solid black">
        <Stack direction={["column"]}>
          <GradientComponent />
          <ColorFormComponent />
        </Stack>
      </Main>

      <DarkModeSwitch />
      <Footer></Footer>
    </Container>
  );
};

export default Index;
