import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

export const Main = ({ children }: any) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Orcamentos Metaler</title>
      </Head>
      <Container p={0}>{children}</Container>
    </Box>
  );
};
