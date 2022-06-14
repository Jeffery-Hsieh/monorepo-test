import { HStack } from "@chakra-ui/react";
import Badge from "../badge";

export default {
  title: "Component/Badge",
};

export const Default = () => (
  <HStack spacing="4">
    <Badge type="default">default</Badge>
    <Badge type="warning">warning</Badge>
    <Badge type="error">error</Badge>
    <Badge type="info">info</Badge>
    <Badge type="special">special</Badge>
    <Badge type="success">success</Badge>
  </HStack>
);
