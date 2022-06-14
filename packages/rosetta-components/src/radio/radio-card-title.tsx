import { Box, BoxProps, UseRadioProps } from "@chakra-ui/react";
import { useRadioCardContext } from "./radio-card";

interface RadioCardTitleProps
  extends Omit<BoxProps, "onChange">,
    UseRadioProps {}

export const RadioCardTitle = (props: RadioCardTitleProps) => {
  const { labelProps } = useRadioCardContext();
  const { children, ...rest } = props;

  return (
    <Box
      textStyle="lg-regular"
      _checked={{
        fontWeight: "rosetta.semibold",
      }}
      _disabled={{
        color: "rosetta.gray.300",
      }}
      {...labelProps}
      {...rest}
    >
      {children}
    </Box>
  );
};
