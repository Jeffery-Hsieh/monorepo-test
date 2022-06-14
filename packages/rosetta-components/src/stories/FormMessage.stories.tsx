import { FormMessage } from "../formMessage";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Form/FormMessage",
  component: FormMessage,
  argTypes: {
    colorScheme: {
      options: ["rosetta.info"],
      control: { type: "select" },
    },
  },
  parameters: {
    controls: {
      include: ["children", "status", "showIcon", "leftIcon"],
    },
  },
};

const Template: ComponentStory<typeof FormMessage> = (args) => {
  return <FormMessage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: "Message goes here",
};

export const FormErrorMessageWithIcon = Template.bind({});
FormErrorMessageWithIcon.args = {
  ...Default.args,
  status: "error",
  showIcon: true,
};

export const FormErrorMessageWithoutIcon = Template.bind({});
FormErrorMessageWithoutIcon.args = {
  ...Default.args,
  status: "error",
  showIcon: false,
};

export const FormSuggesstMessageWithIcon = Template.bind({});
FormSuggesstMessageWithIcon.args = {
  ...Default.args,
  status: "suggestion",
  showIcon: true,
};

export const FormSuccessMessageWithIcon = Template.bind({});
FormSuccessMessageWithIcon.args = {
  ...Default.args,
  status: "success",
};
