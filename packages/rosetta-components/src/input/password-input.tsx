import { useState } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
} from "@chakra-ui/react";

import IcoMoon from "../icoMoon";
import { InputRightElement } from "./input-right-element";

export interface PasswordInputProps extends ChakraInputProps {}

export const PasswordInput = (props: PasswordInputProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <ChakraInput
        size="sm"
        fontSize="rosetta.sm"
        borderRadius="5px"
        errorBorderColor="rosetta.error.500"
        type={show ? "text" : "password"}
        {...props}
      />
      <InputRightElement onClick={handleClick}>
        <IcoMoon
          icon={show ? "eye-off" : "eye-open"}
          color="rosetta.gray.700"
          size={12}
        />
      </InputRightElement>
    </InputGroup>
  );
};
