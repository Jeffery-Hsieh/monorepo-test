import { Box, BoxProps } from "@chakra-ui/react";

export const CardTitle = (props: BoxProps) => (
  <Box
    w="100%"
    overflow="hidden"
    whiteSpace="nowrap"
    textOverflow="ellipsis"
    textStyle="h4"
    {...props}
  />
);
