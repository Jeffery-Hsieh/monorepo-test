export const MESSAGE_DEFAULT_LEFT_ICON = {
  error: {
    icon: "error",
    color: "rosetta.error.500",
  },
  suggestion: {
    icon: "lightbulb",
    color: "rosetta.gray.400",
  },
};

export const MESSAGE_DEFAULT_STYLES = {
  default: {
    color: "rosetta.gray.400",
  },
  error: {
    color: "rosetta.error.500",
  },
  suggestion: {
    color: "rosetta.gray.400",
  },
  success: {
    color: "rosetta.success.500",
  },
};

export type MessageType = "default" | "error" | "suggestion" | "success";
