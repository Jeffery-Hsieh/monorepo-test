import {
  HStack,
  Box,
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from "@chakra-ui/react";

export interface SwitchProps extends ChakraSwitchProps {
  showTextIndicator?: boolean;
}

export const Switch = (props: SwitchProps) => {
  const { showTextIndicator, isDisabled, isChecked, ...rest } = props;

  return (
    <HStack>
      <ChakraSwitch isDisabled={isDisabled} isChecked={isChecked} {...rest} />
      {showTextIndicator && (
        <Box
          textStyle="h6-xs"
          color={isDisabled ? "rosetta.gray.200" : "rosetta.black"}
        >
          {isChecked ? "ON" : "OFF"}
        </Box>
      )}
    </HStack>
  );
};
