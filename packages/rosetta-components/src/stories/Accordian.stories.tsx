import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { AccordionIcon } from "../accordian";

export default {
  title: "Component/Accordion",
  component: Accordion,
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const Default = () => {
  return (
    <Accordion w="400px" allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box textStyle="md-regular" flex="1" textAlign="left">
            Section 1 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel textStyle="md-paragraph" pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box textStyle="md-regular" flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
