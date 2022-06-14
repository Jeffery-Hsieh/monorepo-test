export const BADGE_OPTION = {
  default: {
    bgColor: "rosetta.gray.100",
    color: "rosetta.gray.500",
  },
  warning: {
    bgColor: "rosetta.warning.100",
    color: "rosetta.warning.900",
  },
  error: {
    bgColor: "rosetta.error.100",
    color: "rosetta.error.900",
  },
  info: {
    bgColor: "rosetta.info.100",
    color: "rosetta.info.900",
  },
  special: {
    bgColor: "rosetta.primary",
    color: "rosetta.red.100",
  },
  success: {
    bgColor: "rosetta.success.100",
    color: "rosetta.success.900",
  },
};

export type BadgeType = keyof typeof BADGE_OPTION;
