import {
  Center,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
} from "@chakra-ui/react";
import { Button } from "../button";
// import { PopoverContent } from "../Popover";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Component/Popover",
  component: Popover,
  argTypes: {
    placement: {
      options: ["top", "left", "right", "bottom"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Center h="80vh">
    <Popover {...args}>
      <PopoverTrigger>
        <Button colorScheme="primary">Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  placement: "bottom",
};
