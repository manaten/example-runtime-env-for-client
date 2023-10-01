import { Box, StyleProps } from "@chakra-ui/react";
import React from "react";

export type FooterProps = StyleProps & React.PropsWithChildren;

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => (
  <Box as="footer" w="100%" bgColor="blackAlpha.800" color="white" {...props}>
    <Box p="6" w="container.md" maxW="100%" mx="auto">
      {children}
    </Box>
  </Box>
);
