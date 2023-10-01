import { Box, StyleProps } from "@chakra-ui/react";
import React from "react";

import LogoSvg from "./Logo.svg";

export type LogoProps = StyleProps;

export const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <Box as={LogoSvg} maxWidth="100%" fill="currentColor" w="160px" h="auto" {...props} />
);
