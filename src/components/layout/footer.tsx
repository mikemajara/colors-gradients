import { Flex, FlexProps, forwardRef } from "@chakra-ui/react";

export const Footer = forwardRef<FlexProps, "div">((props: FlexProps, ref) => (
  <Flex
    ref={ref}
    as="footer"
    py={4}
    w="full"
    border="1px solid black"
    {...props}
  />
));
