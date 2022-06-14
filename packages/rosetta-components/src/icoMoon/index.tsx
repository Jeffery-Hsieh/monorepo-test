import { Icon, IconProps as ChakraIconProps } from "@chakra-ui/react";

import ReactIcoMoon from "react-icomoon";
import iconSet from "./selection.json";

export interface IcoMoonProps extends Omit<ChakraIconProps, "css"> {
  icon: string;
  size?: string | number;
  color?: string;
}

const IcoMoon = (props: IcoMoonProps) => {
  return <Icon as={ReactIcoMoon} iconSet={iconSet} {...props} />;
};

IcoMoon.defaultProps = {
  size: "1rem",
};

export default IcoMoon;
