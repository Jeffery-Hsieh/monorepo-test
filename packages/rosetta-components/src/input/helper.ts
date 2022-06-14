import { DEFAULT_INPUT_RIGHT_ICON } from "./consts";
import { get } from "../utils";

export const getDefaultInputRightIcon = (inputStatus: string) => {
  return get(inputStatus, DEFAULT_INPUT_RIGHT_ICON);
};
