export interface IcoMoonAttribute {
  icon: string;
  color: string;
}

export const DEFAULT_INPUT_RIGHT_ICON: Record<string, IcoMoonAttribute> = {
  error: {
    icon: "error",
    color: "rosetta.error.500",
  },
  validated: {
    icon: "tick-circle",
    color: "rosetta.success.100",
  },
};

export const inputRightIconOptions = Object.keys(DEFAULT_INPUT_RIGHT_ICON);
