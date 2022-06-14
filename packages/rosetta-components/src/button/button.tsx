import {
  forwardRef,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

const isIconOnly = (props: ChakraButtonProps) => {
  const { loadingText, children } = props;

  if (loadingText || typeof children === "string") {
    return false;
  }

  return true;
};

export const Button = forwardRef<ChakraButtonProps, "div">((props, ref) => {
  const { children, ...rest } = props;

  const buttonStyles = {
    px: isIconOnly(props) ? "2" : "4",
  };

  return (
    <ChakraButton
      ref={ref}
      size="sm"
      fontSize="rosetta.sm"
      fontWeight="rosetta.semibold"
      {...buttonStyles}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
});
