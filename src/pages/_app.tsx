import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";

export const theme = extendTheme({
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
