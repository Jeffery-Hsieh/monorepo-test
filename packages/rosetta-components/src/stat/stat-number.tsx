import {
  StatNumber as ChakraStatNumber,
  StatNumberProps,
} from "@chakra-ui/react";

export const StatNumber = (props: StatNumberProps) => {
  return <ChakraStatNumber textStyle="h1" {...props} />;
};
