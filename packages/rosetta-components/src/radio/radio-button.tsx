import { Box, Center, CenterProps } from "@chakra-ui/react";
import IcoMoon from "../icoMoon";
import { useRadioCardContext } from "./radio-card";

export const RadioButton = (props: CenterProps) => {
  const { isChecked, checkboxProps } = useRadioCardContext();

  return (
    <Box mt="0.5">
      <Center
        w="1rem"
        h="1rem"
        bgColor="rosetta.white"
        borderWidth="2px"
        borderRadius="50%"
        borderColor="rosetta.gray.100"
        _checked={{
          bgColor: "rosetta.white",
          borderColor: "rosetta.info.100",
        }}
        _disabled={{
          bgColor: "rosetta.gray.50",
        }}
        {...checkboxProps}
        {...props}
      >
        {isChecked && (
          <IcoMoon size="10" icon="tick-circle" color="rosetta.info.100" />
        )}
      </Center>
    </Box>
  );
};
