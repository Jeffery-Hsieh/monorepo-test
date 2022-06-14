import { ChakraProvider } from "@chakra-ui/react";

import defaultTheme from "./defaultTheme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={defaultTheme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
