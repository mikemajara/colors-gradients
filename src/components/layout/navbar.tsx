import React from "react";
import {
  Box,
  Stack,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/next-js";

type Page = {
  label: string;
  href: string;
};

const pages: Page[] = [
  // { label: "Simple", href: "/simple" },
  // { label: "Composite", href: "/composite" },
  { label: "Generator", href: "/transparency" },
  { label: "Word Clip", href: "/word-clip" },
];

export const Navbar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const display = useBreakpointValue({ base: "none", md: "flex" });
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.900", "gray.100");

  return (
    <Box bg={bgColor} px={[4, 6]} py={2} w="full">
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton
          aria-label="Open menu"
          display={["flex", "none"]}
          icon={<HamburgerIcon />}
          onClick={onToggle}
          variant="ghost"
        />
        <HStack as="nav" spacing={4} display={display}>
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              color={color}
              _hover={{ textDecor: "none" }}
            >
              <Button
                fontWeight={router.asPath == page.href ? "bold" : "normal"}
              >
                {" "}
                {page.label}
              </Button>
            </Link>
          ))}
        </HStack>
      </Flex>
      <Box>
        <IconButton
          aria-label="Close menu"
          display={["flex", "none"]}
          icon={<CloseIcon />}
          onClick={onClose}
          position="absolute"
          right="0.5rem"
          top="0.5rem"
          variant="ghost"
        />
        <Box
          bg={bgColor}
          mt={2}
          py={2}
          borderRadius="md"
          display={[isOpen ? "block" : "none", "none"]}
        >
          <Stack spacing={2}>
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                fontSize="xl"
                color={color}
                onClick={onClose}
              >
                <Button>{page.label}</Button>
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
