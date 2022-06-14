import { Textarea } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Form/Textarea",
  component: Textarea,
  args: {
    placeholder: "This is a placeholder",
  },
  parameters: {
    controls: {
      include: ["placeholder", "defaultValue", "isInvalid", "isDisabled"],
    },
  },
};

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  focusBorderColor: "rosetta.info.100",
  errorBorderColor: "rosetta.error.500",
  defaultValue: "Textarea/Inputted",
  isInvalid: false,
  isDisabled: false,
};
