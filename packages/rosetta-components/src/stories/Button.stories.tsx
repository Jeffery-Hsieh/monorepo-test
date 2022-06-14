import { Button } from "../button";
import { ComponentStory } from "@storybook/react";
import IcoMoon from "../icoMoon";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    colorScheme: {
      options: ["primary", "secondary", "tertiary", "destructive"],
      control: { type: "select" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["colorScheme", "isDisabled", "isLoading", "loadingText"],
    },
  },
};

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  colorScheme: "primary",
  children: "Button",
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  colorScheme: "primary",
  isDisabled: true,
  children: "Button",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  leftIcon: <IcoMoon icon="add" />,
  colorScheme: "primary",
  children: "Button",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  leftIcon: <IcoMoon icon="arrow-right" />,
  colorScheme: "primary",
  children: "Button",
};

export const IconButton = Template.bind({});
IconButton.args = {
  colorScheme: "primary",
  children: <IcoMoon icon="search" />,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  colorScheme: "primary",
  isLoading: true,
  loadingText: "Loading",
};
