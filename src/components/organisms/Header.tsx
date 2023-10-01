import { Box, Flex, StyleProps } from "@chakra-ui/react";
import React from "react";

import { Logo } from "../atoms/Logo";

type HeaderProps = StyleProps & React.PropsWithChildren;

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => (
  <Flex as="header" w="100%" justify="center" bgColor="blackAlpha.800" color="white" {...props}>
    <Flex w="container.md" gap={8} alignItems="center" px={4} py={3}>
      <Logo w="100px" />
      <Box>
        {children}
      </Box>
    </Flex>
  </Flex>
);
