import { Box, BoxProps } from "@chakra-ui/react";

export const CardText = (props: BoxProps) => (
  <Box
    textStyle="sm-regular"
    w="100%"
    overflow="hidden"
    whiteSpace="nowrap"
    textOverflow="ellipsis"
    {...props}
  />
);
