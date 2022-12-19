import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { AppProps } from "next/app";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", "#202021")(props),
    },
  }),
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, styles });
