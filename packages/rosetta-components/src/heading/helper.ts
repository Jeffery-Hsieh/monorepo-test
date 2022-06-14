import type { HeadingType } from "./consts";
import { HEADING_OPTIONS } from "./consts";

export const getHeadingStyles = ({ type }: { type: HeadingType }) => {
  const headingStyle = HEADING_OPTIONS[type];

  return {
    ...headingStyle,
  };
};
