/**
 * Attach backgroundColor Manually instead of applying `colorScheme` setting used by Chakra by default.
 */

export const COLOR_SCHEME_OPTIONS = {
  primary: {
    bgColor: "rosetta.primary",
    color: "rosetta.gray.50",
    _hover: {
      bgColor: "rosetta.shades.300",
      _disabled: {
        bgColor: "rosetta.red.400",
      },
    },
    _disabled: {
      bgColor: "rosetta.red.400",
      opacity: 1,
    },
  },
  secondary: {
    bgColor: "rosetta.gray.500",
    color: "rosetta.gray.50",
    _hover: {
      bgColor: "rosetta.gray.700",
      _disabled: {
        bgColor: "rosetta.gray.200",
      },
    },
    _disabled: {
      bgColor: "rosetta.gray.200",
      opacity: 1,
    },
  },
  tertiary: {
    bgColor: "rosetta.white",
    color: "rosetta.gray.700",
    _hover: {
      bgColor: "rosetta.gray.50",
      _disabled: {
        bgColor: "rosetta.white",
      },
    },
    _disabled: {
      bgColor: "rosetta.white",
      color: "rosetta.gray.300",
    },
  },
  destructive: {
    bgColor: "rosetta.redAlpha.500",
    color: "rosetta.error.500",
    _hover: {
      bgColor: "rosetta.redAlpha.700",
      _disabled: {
        bgColor: "rosetta.red.100",
      },
    },
    _disabled: {
      bgColor: "rosetta.red.100",
      color: "rosetta.red.400",
    },
  },
};

export type RosettaColorScheme = keyof typeof COLOR_SCHEME_OPTIONS;
export const rosettaColorSchemeOptions = Object.keys(COLOR_SCHEME_OPTIONS);
