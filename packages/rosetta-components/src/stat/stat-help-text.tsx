import {
  StatHelpText as ChakraStatHelpText,
  StatHelpTextProps,
} from "@chakra-ui/react";

export const StatHelpText = (props: StatHelpTextProps) => {
  return (
    <ChakraStatHelpText
      textStyle="sm-regular"
      color="rosetta.gray.400"
      {...props}
    />
  );
};
