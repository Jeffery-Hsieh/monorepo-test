import { Box } from "@chakra-ui/react";
import { TextInput } from "../../input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/Input/TextInput",
  component: TextInput,
  args: {
    placeholder: "This is a placeholder",
  },
  parameters: {
    controls: {
      include: ["placeholder", "isDisabled", "status"],
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <Box w="50%">
    <TextInput {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
  onChange: () => {},
};

export const InputText = Template.bind({});
InputText.args = {
  ...Default.args,
  value: "Inputted text",
};

export const InputIsValidated = Template.bind({});
InputIsValidated.args = {
  ...Default.args,
  value: "Validated text",
  status: "validated",
};

export const InputIsDisabled = Template.bind({});
InputIsDisabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const InputIsInvalid = Template.bind({});
InputIsInvalid.args = {
  ...Default.args,
  value: "Error",
  status: "error",
};

export const InputLongWords = Template.bind({});
InputLongWords.args = {
  ...Default.args,
  value:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia mollitia, aut iusto cum quas odio exercitationem, soluta placeat hic autem dicta amet, dolorem facilis facere eius eos alias reprehenderit! Dicta!",
};
