import { Box, BoxProps } from "@chakra-ui/react";

export const CardLabel = (props: BoxProps) => (
  <Box
    mb="1"
    textStyle="h6-xs"
    color="rosetta.gray.500"
    textTransform="uppercase"
    {...props}
  />
);
