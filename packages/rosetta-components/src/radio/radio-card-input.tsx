import { InputProps } from "@chakra-ui/react";

import { useRadioCardContext } from "./radio-card";
import { TextInput } from "../input";

interface RadioCardInputProps extends InputProps {
  isInputHiddenWhenUnChecked?: boolean;
}

export const RadioCardInput = (props: RadioCardInputProps) => {
  const { isChecked, selectRadioOnFocus } = useRadioCardContext();
  const { isInputHiddenWhenUnChecked, ...rest } = props;

  return (
    <TextInput
      w="100%"
      onFocus={selectRadioOnFocus}
      hidden={!isInputHiddenWhenUnChecked && !isChecked}
      {...rest}
    />
  );
};
