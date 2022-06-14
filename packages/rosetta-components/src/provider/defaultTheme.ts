import { extendTheme } from "@chakra-ui/react";
import { defaultTokens } from "../foundation";
import { Button, Switch } from "./components";

const defaultTheme = {
  colors: {
    rosetta: defaultTokens.colors,
  },
  spacing: {
    rosetta: defaultTokens.spacing,
  },
  fontSizes: {
    rosetta: defaultTokens.fontSizes,
  },
  fontWeights: {
    rosetta: defaultTokens.fontWeights,
  },
  textStyles: defaultTokens.textStyles,
  components: {
    Switch,
    Button,
  },
};

export default extendTheme(defaultTheme);
