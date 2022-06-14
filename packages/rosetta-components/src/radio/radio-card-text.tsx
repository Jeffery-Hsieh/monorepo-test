import { Box, BoxProps } from "@chakra-ui/react";
import { useRadioCardContext } from "./radio-card";

export const RadioCardText = (props: BoxProps) => {
  const { labelProps } = useRadioCardContext();
  return (
    <Box
      mt="1"
      textStyle="sm-regular"
      _disabled={{
        color: "rosetta.gray.300",
      }}
      {...props}
      {...labelProps}
    />
  );
};
