import { Center, BoxProps, UseRadioProps } from "@chakra-ui/react";
import { useRadioCardContext } from "./radio-card";

interface RadioCardCenterProps
  extends Omit<BoxProps, "onChange">,
    UseRadioProps {}

export const RadioCardCenter = (props: RadioCardCenterProps) => {
  const { labelProps } = useRadioCardContext();
  const { children, ...rest } = props;

  return (
    <Center
      w="100%"
      textStyle="lg-regular"
      _checked={{
        color: "rosetta.black",
        fontWeight: "rosetta.semibold",
      }}
      _disabled={{
        color: "rosetta.gray.300",
      }}
      {...labelProps}
      {...rest}
    >
      {children}
    </Center>
  );
};
