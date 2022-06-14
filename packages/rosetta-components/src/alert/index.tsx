import {
  Alert as ChakraAlert,
  AlertProps as ChakraAlertProps,
} from "@chakra-ui/react";
import { AlertType } from "./consts";
import { getAlertStyles, getAlertIcon } from "./helper";

export interface AlertProps extends ChakraAlertProps {
  type: AlertType;
  leftIcon?: () => React.ReactElement;
}

const Alert = (props: AlertProps) => {
  const { type, leftIcon, children, ...rest } = props;

  const alertStyles = getAlertStyles({ type });

  const LeftIcon = getAlertIcon({ type });

  return (
    <ChakraAlert
      fontSize="rosetta.md"
      color="rosetta.gray.800"
      {...alertStyles}
      {...rest}
    >
      <LeftIcon />
      {children}
    </ChakraAlert>
  );
};

export default Alert;
