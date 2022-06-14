import { SimpleGrid, Text, Box } from "@chakra-ui/react";

import Heading from "../heading";

export default {
  title: "Typography/Text",
};

export const Default = () => (
  <SimpleGrid column="3" spacing="8">
    <Heading as="h3">Font Size: Large</Heading>
    <Text textStyle="lg-regular">Text / Large / L Regular</Text>
    <Text textStyle="lg-medium">Text / Large / L Medium</Text>
    <Text textStyle="lg-semibold">Text / Large / L Semibold</Text>

    <Heading as="h3">Font Size: Medium</Heading>
    <Text textStyle="md-medium">Text / Mid / M Regular</Text>
    <Text textStyle="md-medium">Text / Mid / M Medium</Text>
    <Text textStyle="md-semibold">Text / Mid / M Semibold</Text>

    <Heading as="h3">Font Size: Small</Heading>
    <Text textStyle="sm-regular">Text / Small / S Regular</Text>
    <Text textStyle="sm-medium">Text / Small / S Medium</Text>
    <Text textStyle="sm-semibold">Text / Small / S Semibold</Text>
  </SimpleGrid>
);
