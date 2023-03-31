import {
  Text,
  Stack,
  Box,
  Button,
  Center,
  Heading,
  Flex,
  HStack,
  Wrap,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

import { Container } from "../components/layout/Container";
import { Main } from "../components/layout/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import GradientBox from "../components/gradient/gradient-box";
import { useState } from "react";

import dynamic from "next/dynamic";
import GradientComponent from "../components/gradient/gradient-component-simple";
import { IconBrush } from "../icons";
import Head from "next/head";

const ColorFormComponent = dynamic(
  () => import("../components/forms/color-form-component-composite"),
  { ssr: false }
);

const Index = () => {
  return (
    <>
      <Head>
        <title>Colors Gradients</title>
      </Head>
      <Container pt={10} minH="100vh">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          <Heading
            as="h1"
            size="4xl"
            fontWeight={"900"}
            bgGradient={
              "radial-gradient(circle at bottom right, #9ed7ce 7%, transparent 100%), radial-gradient(circle at left, #2535cb 17%, transparent 100%), radial-gradient(circle at top right, #3e2c2f 85%, transparent 100%);"
            }
            bgClip="text"
            textAlign="center"
            mb={4}
          >
            Colors Gradients
          </Heading>
          <Stack direction={["column", "column"]} spacing={5} align="center">
            <Text textAlign="center" mb={8} fontSize="xl">
              Generate beautiful color gradients with ease!
            </Text>
            {/* Place a snapshot of your application here */}
            <Box
              borderWidth="1px"
              borderRadius="xl"
              mb={8}
              overflow="hidden"
              width="100%"
              maxW="600px"
              boxShadow="md"
            >
              <img src="/images/verde.png" alt="Application Snapshot" />
            </Box>
          </Stack>
          <Stack direction={["column", "column"]} spacing={5} align="center">
            <Text textAlign="center" mb={8} fontSize="xl">
              Clip words in real time after
            </Text>
            {/* Place a snapshot of your application here */}
            <Box
              borderWidth="1px"
              borderRadius="xl"
              mb={8}
              overflow="hidden"
              width="100%"
              maxW="600px"
              boxShadow="md"
            >
              <img src="/images/morado.png" alt="Application Snapshot" />
            </Box>
          </Stack>
          {/* Call-to-Action buttons */}
          <HStack justifyContent="center" mb={8}>
            <Link href="/transparency">
              <Button colorScheme="blue">Explore Gradients</Button>
            </Link>
            <Button colorScheme="teal" mr={4} as={Link} href="/word-clip">
              Word Clip
            </Button>
          </HStack>
          {/* Additional content, if needed */}
        </Stack>
        <Footer />
      </Container>
    </>
  );
};

export default Index;

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: "/transparency",
//     },
//   };
// }
