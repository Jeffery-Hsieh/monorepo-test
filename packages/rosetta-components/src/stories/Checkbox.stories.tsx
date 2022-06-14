import { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    controls: {
      exclude: ["colorScheme"],
    },
  },
};

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return <Checkbox isChecked={value} onChange={handleChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  colorScheme: "rosetta.info",
  isDisabled: false,
  children: "Checkbox",
};
