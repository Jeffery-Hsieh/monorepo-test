export const ALERT_OPTION = {
  info: {
    bgColor: "rosetta.info.40",
  },
  warning: {
    bgColor: "rosetta.warning.40",
  },
  error: {
    bgColor: "rosetta.error.40",
  },
  success: {
    bgColor: "rosetta.success.40",
  },
};

export const ALERT_DEFAULT_ICON = {
  info: {
    iconName: "info-sign",
    color: "rosetta.info.500",
  },
  warning: {
    iconName: "warning-sign",
    color: "rosetta.warning.500",
  },
  error: {
    iconName: "error",
    color: "rosetta.error.500",
  },
  success: {
    iconName: "tick-circle",
    color: "rosetta.success.500",
  },
};

export type AlertType = keyof typeof ALERT_OPTION;
