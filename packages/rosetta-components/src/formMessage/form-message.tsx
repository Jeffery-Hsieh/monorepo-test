import { Box, BoxProps, Flex, IconProps } from "@chakra-ui/react";
import type { MessageType } from "./consts";
import { getDefaultLeftIcon, getDefaultMessageStyles } from "./helper";
import IcoMoon from "../icoMoon";

export interface FormMessageProps extends BoxProps {
  status?: MessageType;
  showIcon?: boolean;
  leftIcon?: React.ReactElement;
  children: React.ReactNode;
}

export const FormMessage = (props: FormMessageProps) => {
  const {
    status = "default",
    showIcon = true,
    leftIcon,
    children,
    ...rest
  } = props;

  const messageStyles = getDefaultMessageStyles(status);

  return (
    <Flex alignItems="center">
      {showIcon && (
        <FormMessageLeftIcon mr={1} status={status} icon={leftIcon} />
      )}
      <Box {...messageStyles} {...rest}>
        {children}
      </Box>
    </Flex>
  );
};

interface FormMessageLeftIconProps extends IconProps {
  status: MessageType;
  icon?: React.ReactElement;
}

const FormMessageLeftIcon = (props: FormMessageLeftIconProps) => {
  const { status, icon, ...rest } = props;

  return <IcoMoon {...getDefaultLeftIcon(status)} {...rest} />;
};
