import { Flex, FlexProps, forwardRef } from "@chakra-ui/react";

export const Header = forwardRef<FlexProps, "div">((props: FlexProps, ref) => (
  <Flex ref={ref} as="header" py={5} border="1px solid black" {...props} />
));
