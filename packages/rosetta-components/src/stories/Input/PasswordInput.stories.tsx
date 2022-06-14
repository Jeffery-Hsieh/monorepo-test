import { PasswordInput, PasswordInputProps } from "../../input";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChangeEvent, useState } from "react";

export default {
  title: "Form/Input/PasswordInput",
  component: PasswordInput,
  parameters: {
    controls: {
      include: ["isInvalid"],
    },
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => {
  const [value, setValue] = useState<string>(args.defaultValue as string);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <PasswordInput value={value} onChange={handleChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Password123",
  isInvalid: false,
};
