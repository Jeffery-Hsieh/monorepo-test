import { layoutPropNames, omitThemingProps } from "@chakra-ui/system";
import {
  Box,
  HStack,
  useRadio,
  useRadioGroupContext,
  UseRadioProps,
  UseRadioReturn,
  RadioProps,
} from "@chakra-ui/react";
import { callAll, split, __DEV__ } from "@chakra-ui/utils";
import { createContext } from "@chakra-ui/react-utils";
import { FocusEventHandler } from "react";

const solidContainerStyle = {
  borderRadius: "xl",
  _checked: {
    bgColor: "rosetta.info.10",
  },
  _disabled: {
    cursor: "not-allowed",
  },
};

const outlineContainerStyle = {
  borderRadius: "md",
  sx: {
    outlineWidth: "1px",
    outlineColor: "rosetta.gray.100",
    outlineStyle: "solid",
  },
  _hover: {
    outlineColor: "rosetta.info.100",
  },
  _checked: {
    outlineWidth: "2px",
    outlineColor: "rosetta.info.100",
  },
  _disabled: {
    outlineColor: "rosetta.gray.100",
    cursor: "not-allowed",
  },
};

export interface RadioCardContext {
  isChecked?: boolean;
  selectRadioOnFocus: FocusEventHandler<HTMLInputElement>;
  checkboxProps: ReturnType<UseRadioReturn["getCheckboxProps"]>;
  labelProps: ReturnType<UseRadioReturn["getLabelProps"]>;
}

const [RadioCardProvider, useRadioCardContext] =
  createContext<RadioCardContext>({
    name: "RadioCardContext",
    strict: false,
  });

export { useRadioCardContext };

export interface RadioCardProps
  extends UseRadioProps,
    Omit<RadioProps, "title"> {
  type: "solid" | "outline";
  /**
   * Content below title
   */
  children?: React.ReactNode;
}

export const RadioCard = (props: RadioCardProps) => {
  const group = useRadioGroupContext();
  const ownProps = omitThemingProps(props);

  const {
    spacing = "0.5rem",
    children,
    isDisabled = group?.isDisabled,
    isFocusable = group?.isFocusable,
    inputProps: htmlInputProps,
    type,
    ...rest
  } = ownProps;

  const { onChange: onChangeProp, value: valueProp } = props;

  let isChecked = props.isChecked;
  if (group?.value != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }

  let onChange = onChangeProp;
  if (group?.onChange && valueProp != null) {
    onChange = callAll(group.onChange, onChangeProp);
  }

  const selectRadioOnFocus = () => {
    console.log("focus");
    if (group?.onChange && valueProp != null) {
      group.onChange(valueProp);
    }
  };

  const name = props?.name ?? group?.name;

  const {
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps,
    htmlProps,
  } = useRadio({
    ...rest,
    isChecked,
    isFocusable,
    isDisabled,
    onChange,
    name,
  });

  const [layoutProps, otherProps] = split(htmlProps, layoutPropNames as any);

  const checkboxProps = getCheckboxProps(otherProps);
  const inputProps = getInputProps(htmlInputProps);
  const labelProps = getLabelProps();
  const rootProps = Object.assign({}, layoutProps, getRootProps());

  const radioState = {
    isChecked,
    selectRadioOnFocus,
    checkboxProps,
    labelProps,
  };

  const baseContainerStyles = {
    alignItems: "flex-start",
    cursor: "pointer",
    p: "3",
  };

  const customContainerStyles =
    type === "solid" ? solidContainerStyle : outlineContainerStyle;

  const rootStyles = { ...baseContainerStyles, ...customContainerStyles };

  return (
    <Box
      position="relative"
      as="label"
      w="100%"
      overflow="hidden"
      {...rootProps}
      {...rootStyles}
    >
      {type === "outline" && isDisabled && <Overlay />}
      <input {...inputProps} hidden />
      <HStack spacing="2" alignItems="flex-start" {...rootProps}>
        <RadioCardProvider value={radioState}>{children}</RadioCardProvider>
      </HStack>
    </Box>
  );
};

const Overlay = () => (
  <Box
    position="absolute"
    top="0"
    left="0"
    w="100%"
    h="100%"
    opacity="0.4"
    bgColor="rosetta.gray.50"
  />
);
