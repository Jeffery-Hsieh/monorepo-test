import { ALERT_OPTION, AlertType, ALERT_DEFAULT_ICON } from "./consts";
import IcoMoon from "../icoMoon";

export const getAlertStyles = ({ type }: { type: AlertType }) => {
  return ALERT_OPTION[type];
};

export const getAlertIcon = ({
  type,
  leftIcon,
}: {
  type: AlertType;
  leftIcon?: () => React.ReactElement;
}) => {
  if (leftIcon) {
    return leftIcon;
  }

  const { iconName, color } = ALERT_DEFAULT_ICON[type];

  return () => <IcoMoon icon={iconName} color={color} mr="3" />;
};
