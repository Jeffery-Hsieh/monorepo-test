import { MouseEventHandler } from "react";
import {
  Box,
  InputRightElement as ChakraInputRightElement,
} from "@chakra-ui/react";

export interface InputRightIconProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

export const InputRightElement = (props: InputRightIconProps) => {
  const { onClick, children } = props;

  return (
    <ChakraInputRightElement h="100%">
      <Box
        h="100%"
        onClick={onClick}
        cursor={onClick ? "pointer" : "auto"}
        userSelect="none"
        display="flex"
        justifyItems="center"
        alignItems="center"
      >
        {children}
      </Box>
    </ChakraInputRightElement>
  );
};
