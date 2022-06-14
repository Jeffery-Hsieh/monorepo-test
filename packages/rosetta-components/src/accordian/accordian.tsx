import { useAccordionItemState, IconProps } from "@chakra-ui/react";

import IcoMoon from "../icoMoon";

export interface AccordionIconProps extends IconProps {}

export const AccordionIcon = (props: AccordionIconProps) => {
  const { isOpen } = useAccordionItemState();

  return isOpen ? (
    <IcoMoon icon="minus" size="11" />
  ) : (
    <IcoMoon icon="plus" size="11" />
  );
};
