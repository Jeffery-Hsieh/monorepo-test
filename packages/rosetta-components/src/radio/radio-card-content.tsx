import { Stack, StackProps, UseRadioProps } from "@chakra-ui/react";
interface RadioCardContentProps
  extends Omit<StackProps, "onChange">,
    UseRadioProps {}

export const RadioCardContent = (props: RadioCardContentProps) => {
  const { children, ...rest } = props;

  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      alignSelf="stretch"
      {...rest}
    >
      {children}
    </Stack>
  );
};
