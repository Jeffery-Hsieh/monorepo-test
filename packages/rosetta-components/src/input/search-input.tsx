import { MouseEventHandler } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  Tooltip,
  Box,
} from "@chakra-ui/react";
import IcoMoon from "../icoMoon";
import { InputRightElement } from "./input-right-element";

export interface SearchInputProps extends ChakraInputProps {
  onClearTextClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * @description This is a uncontrolled component. You can only get the input value from `onChange` props.
 */

export const SearchInput = (props: SearchInputProps) => {
  const { onClearTextClick, ...rest } = props;
  const showIcon = props.value && !!props.value?.toString().length;

  return (
    <InputGroup>
      <ChakraInput
        size="sm"
        fontSize="rosetta.sm"
        borderRadius="5px"
        focusBorderColor="rosetta.info.100"
        {...rest}
      />
      {showIcon && (
        <InputRightElement onClick={onClearTextClick}>
          <Tooltip label="Clear text" hasArrow>
            <Box h="3" lineHeight="3">
              <IcoMoon size="12" icon="delete" color="rosetta.gray.600" />
            </Box>
          </Tooltip>
        </InputRightElement>
      )}
    </InputGroup>
  );
};
