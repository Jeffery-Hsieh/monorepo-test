import { VStack } from "@chakra-ui/react";
import Alert from "../alert";

export default {
  title: "Component/Alert",
};

export const Default = () => (
  <VStack spacing="4" w="486px">
    <Alert type="info">Rosetta.ai's new update is now live!</Alert>
    <Alert type="warning">
      You're trial is about to expire! Please update your details
    </Alert>
    <Alert type="error">There was an error processing your request</Alert>
    <Alert type="success">Your recommendation pop-up is now live!</Alert>
  </VStack>
);
