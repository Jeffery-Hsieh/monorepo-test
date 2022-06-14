import { useState } from "react";
import { SearchInput } from "../../input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/Input/SearchInput",
  component: SearchInput,
  parameters: {
    controls: {
      include: ["placeholder"],
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => {
  const [value, setValue] = useState<string>("TypeSearch");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onClearTextClick = () => {
    setValue("");
  };

  return (
    <SearchInput
      value={value}
      onChange={onChange}
      onClearTextClick={onClearTextClick}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
