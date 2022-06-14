import { forwardRef } from "@chakra-ui/react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
} from "@chakra-ui/react";
import { InputRightElement } from "./input-right-element";
import IcoMoon from "../icoMoon";

import { getDefaultInputRightIcon } from "./helper";

export type Status = "error" | "validated";
export interface TextInputProps extends ChakraInputProps {
  status?: Status;
  rightElement?: React.ReactNode;
}

export const TextInput = forwardRef<TextInputProps, "input">((props, ref) => {
  const {
    status = "default",
    rightElement: rightElementProp,
    onChange,
    value,
    placeholder,
    ...rest
  } = props;

  let rightElement = rightElementProp;

  if (!rightElement) {
    const iconMoonProps = getDefaultInputRightIcon(status);
    rightElement = iconMoonProps ? (
      <IcoMoon size="12" {...iconMoonProps} />
    ) : null;
  }

  const inputProps = {
    onChange,
    value,
    placeholder,
  };

  return (
    <InputGroup {...rest}>
      <ChakraInput
        ref={ref}
        px="2"
        size="sm"
        fontSize="rosetta.sm"
        borderRadius="5px"
        isInvalid={status === "error"}
        errorBorderColor="rosetta.error.500"
        focusBorderColor="rosetta.info.100"
        {...inputProps}
        {...rest}
      />
      {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
    </InputGroup>
  );
});
