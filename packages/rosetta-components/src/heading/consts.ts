export const HEADING_OPTIONS = {
  h1: {
    fontSize: "rosetta.4xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.24px",
    lineHeight: "40px",
    marginTop: "56px",
  },
  h2: {
    fontSize: "rosetta.3xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.24px",
    lineHeight: "32px",
    marginTop: "40px",
  },
  h3: {
    fontSize: "rosetta.2xl",
    fontWeight: "rosetta.medium",
    letterSpacing: "-0.06px",
    lineHeight: "32px",
    marginTop: "40px",
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
  "h6-md": {
    fontSize: "rosetta.sm",
    fontWeight: "rosetta.semibold",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  "h6-sm": {
    fontSize: "rosetta.xs",
    fontWeight: "rosetta.semibold",
    letterSpacing: "0px",
    lineHeight: "16px",
  },
  "h6-xs": {
    fontSize: "11px",
    fontWeight: "rosetta.semibold",
    letterSpacing: "0.3px",
    lineHeight: "16px",
  },
};

export type HeadingType = keyof typeof HEADING_OPTIONS;
export const headingTypes = Object.keys(HEADING_OPTIONS);
