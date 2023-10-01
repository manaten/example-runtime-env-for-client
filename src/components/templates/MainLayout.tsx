import { Box, Flex, StyleProps } from "@chakra-ui/react";
import React from "react";

import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export type MainLayoutProps = StyleProps & React.PropsWithChildren;

export const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => (
  <Flex alignItems="center" direction="column" h="100vh" {...props}>
    <Header>
      Header
    </Header>
    <Box as="main" w="container.md" maxW="100%" p={8} flexGrow={1}>
      {children}
    </Box>
    <Footer>
      Footer
    </Footer>
  </Flex>
);
