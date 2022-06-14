/**
 * ColorScheme
 */

const colors = {
  black: "#0A0101",
  white: "#FFFFFF",
  gray: {
    900: "#231A1A",
    800: "#3B3434",
    700: "#544D4D",
    600: "#6C6767",
    500: "#858080",
    400: "#9D9999",
    300: "#B6B3B3",
    200: "#CECCCC",
    100: "#E7E6E6",
    50: "#F8F8F8",
  },
  redAlpha: {
    500: "#FF737340",
    700: "#FF737366",
  },
  primary: "#AD3E4A",
  secondary: "#585857",
  red: {
    900: "#B5515C",
    800: "#BD656E",
    700: "#C67880",
    600: "#CE8B92",
    500: "#D69FA5",
    400: "#DEB2B7",
    300: "#E6C5C9",
    200: "#EFD8DB",
    100: "#F7ECED",
  },
  shades: {
    900: "#110607",
    800: "#230C0F",
    700: "#341316",
    600: "#45191E",
    500: "#571F25",
    400: "#68252C",
    300: "#792B34",
    200: "#8A323B",
    100: "#9C3843",
  },
  error: {
    900: "#A82A2A",
    700: "#C23030",
    500: "#DB3737",
    300: "#F55656",
    100: "#FF7373",
    40: "#FFC7C7",
    25: "#FFDCDC",
  },
  warning: {
    900: "#A66321",
    700: "#BF7326",
    500: "#D9822B",
    300: "#F29D49",
    100: "#FFB366",
    40: "#FFE1C2",
    25: "#FFECD9",
  },
  success: {
    900: "#0A6640",
    700: "#0D8050",
    500: "#0F9960",
    300: "#15B371",
    100: "#3DCC91",
    40: "#B1EBD3",
    10: "#ECFAF4",
  },
  info: {
    900: "#0E5A8A",
    700: "#106BA3",
    500: "#137CBD",
    300: "#2B95D6",
    100: "#48AFF0",
    40: "#B6DFF9",
    10: "#EDF7FE",
  },
};

/**
 * Spacing
 */

const spacing = {
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  28: "1.75rem",
  32: "2rem",
  40: "2.5rem",
  48: "3rem",
  56: "3.5rem",
  64: "4rem",
  72: "4.5rem",
  96: "6rem",
};

const fontSizes = {
  xs: "11px",
  sm: "0.75rem",
  md: "0.875rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
};

const fontWeights = {
  regular: "400",
  medium: "510",
  semibold: "590",
};

export const textStyles = {
  h1: {
    fontSize: "rosetta.4xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.24px",
    lineHeight: "40px",
  },
  h2: {
    fontSize: "rosetta.3xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.24px",
    lineHeight: "32px",
  },
  h3: {
    fontSize: "rosetta.2xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.06px",
    lineHeight: "32px",
  },
  h4: {
    fontSize: "rosetta.xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.06px",
    lineHeight: "28px",
  },
  h5: {
    fontSize: "rosetta.md",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "h6-xs": {
    fontSize: "11px",
    fontWeight: "rosetta.semibold",
    letterSpacing: "0.3px",
    lineHeight: "16px",
  },
  "lg-paragraph": {
    fontSize: "rosetta.lg",
    fontWeight: "rosetta.regular",
    letterSpacing: "-0.06px",
    lineHeight: "24px",
  },
  "md-paragraph": {
    fontSize: "rosetta.md",
    fontWeight: "rosetta.regular",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
  },
  "sm-paragraph": {
    fontSize: "rosetta.sm",
    fontWeight: "rosetta.regular",
    letterSpacing: "-0.04px",
    lineHeight: "18px",
  },
  "lg-regular": {
    fontSize: "rosetta.lg",
    fontWeight: "rosetta.regular",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "lg-medium": {
    fontSize: "rosetta.lg",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "lg-semibold": {
    fontSize: "rosetta.lg",
    fontWeight: "rosetta.semibold",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "md-regular": {
    fontSize: "rosetta.md",
    fontWeight: "rosetta.regular",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "md-medium": {
    fontSize: "rosetta.md",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "md-semibold": {
    fontSize: "rosetta.md",
    fontWeight: "rosetta.semibold",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "sm-regular": {
    fontSize: "rosetta.sm",
    fontWeight: "rosetta.regular",
    letterSpacing: "0",
    lineHeight: "16px",
  },
  "sm-medium": {
    fontSize: "rosetta.sm",
    fontWeight: "rosetta.medium",
    letterSpacing: "0",
    lineHeight: "16px",
  },
  "sm-semibold": {
    fontSize: "rosetta.sm",
    fontWeight: "rosetta.semibold",
    letterSpacing: "0",
    lineHeight: "16px",
  },
};

export const foundation = {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  textStyles,
};
