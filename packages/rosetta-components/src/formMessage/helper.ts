import { MESSAGE_DEFAULT_STYLES, MESSAGE_DEFAULT_LEFT_ICON } from "./consts";
import { get } from "../utils";

export const getDefaultLeftIcon = (status: string) => {
  return get(status, MESSAGE_DEFAULT_LEFT_ICON);
};

export const getDefaultMessageStyles = (status: string) => {
  return get(status, MESSAGE_DEFAULT_STYLES);
};
