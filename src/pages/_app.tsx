import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./Layout/Main";
import type { AppProps } from "next/app";
import { theme } from "../styles/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}
