import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

import { getHeadingStyles } from "./helper";
import { headingTypes, HeadingType } from "./consts";

type Omitted = "as";

export interface HeadingProps extends Omit<ChakraHeadingProps, Omitted> {
  as: HeadingType;
}

const Heading = (props: HeadingProps) => {
  const { as, children, ...rest } = props;

  let headingStyles = {};

  if (typeof as === "string" && headingTypes.includes(as)) {
    const type = as as HeadingType;
    headingStyles = getHeadingStyles({ type });
  }

  const tag: any = as.split("-")[0];

  return (
    <ChakraHeading as={tag} {...headingStyles} {...rest}>
      {children}
    </ChakraHeading>
  );
};

export default Heading;
