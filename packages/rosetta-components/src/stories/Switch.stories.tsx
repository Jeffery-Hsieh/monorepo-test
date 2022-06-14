import { ChangeEvent, useState } from "react";
import { Switch } from "../switch";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/Switch",
  component: Switch,
  args: {
    placeholder: "This is a placeholder",
  },
  argTypes: {
    showTextIndicator: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["placeholder", "isDisabled", "showTextIndicator"],
    },
  },
};

const Template: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return <Switch isChecked={value} onChange={handleChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
};

export const WithTextIndicator = Template.bind({});
WithTextIndicator.args = {
  ...Default.args,
  showTextIndicator: true,
};
