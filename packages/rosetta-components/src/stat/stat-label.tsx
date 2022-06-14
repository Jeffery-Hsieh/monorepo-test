import { StatLabel as ChakraStatLabel, StatLabelProps } from "@chakra-ui/react";

export const StatLabel = (props: StatLabelProps) => {
  return <ChakraStatLabel textStyle="h5" {...props} />;
};
