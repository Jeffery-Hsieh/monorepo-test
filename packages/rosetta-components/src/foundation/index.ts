import * as R from "ramda";

const { mergeDeepRight } = R;

import { foundation } from "./foundation";

export const getTokens = (customTokens?: any) => {
  const tokens = customTokens
    ? mergeDeepRight(foundation, customTokens)
    : foundation;

  return tokens;
};

export const defaultTokens = getTokens();
