import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
} from "@chakra-ui/react";
import { BADGE_OPTION, BadgeType } from "./consts";

export interface BadgeProps extends ChakraBadgeProps {
  type: BadgeType;
}

const Badge = (props: BadgeProps) => {
  const { type, children } = props;

  const badgeStyles = BADGE_OPTION[type];

  return (
    <ChakraBadge
      px="1"
      fontSize="rosetta.xs"
      fontWeight="rosetta.semibold"
      letterSpacing="0.3px"
      lineHeight="16px"
      {...badgeStyles}
    >
      {children}
    </ChakraBadge>
  );
};

export default Badge;
