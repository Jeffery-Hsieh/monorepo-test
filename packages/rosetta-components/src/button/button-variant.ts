import { mode } from "@chakra-ui/theme-tools";
import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import {
  RosettaColorScheme,
  COLOR_SCHEME_OPTIONS,
  rosettaColorSchemeOptions,
} from "./consts";

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
};

export const baseStyle: SystemStyleObject = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

export const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    const bg = mode(`gray.100`, `whiteAlpha.200`)(props);

    return {
      bg,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    };
  }

  if (rosettaColorSchemeOptions.includes(c)) {
    return COLOR_SCHEME_OPTIONS[c as RosettaColorScheme];
  }

  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] ?? {};

  const background = mode(bg, `${c}.200`)(props);

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  };
};

export const variantPlainText: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "blackAlpha") {
    const bg = mode(`rosetta.white`, `rosetta.black`)(props);

    return {
      bg,
      color: "rosetta.gray.700",
      _hover: {
        color: `rosetta.black`,
        _disabled: {
          color: `rosetta.gray.200`,
        },
      },
      _focus: {
        boxShadow: "none",
      },
    };
  }

  const {
    bg = `${c}.700`,
    color = "white",
    hoverBg = `${c}.900`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] ?? {};

  const background = mode(bg, `${c}.200`)(props);

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  };
};
