import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Parameters, StoryContext } from "@storybook/react";
import * as React from "react";

import defaultTheme from "../src/provider/defaultTheme";

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();

  React.useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <React.StrictMode>
      <ChakraProvider theme={extendTheme(defaultTheme)}>
        <div dir={dir} id="story-wrapper">
          <StoryFn />
        </div>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export const parameters: Parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [withChakra];
