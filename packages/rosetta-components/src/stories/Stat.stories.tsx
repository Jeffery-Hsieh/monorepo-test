import { Flex, Stat, StatArrow } from "@chakra-ui/react";
import { StatLabel, StatNumber, StatHelpText } from "../stat";
import IcoMoon from "../icoMoon";

export default {
  title: "Component/State",
};

export const Default = () => (
  <Stat>
    <StatLabel>
      <Flex alignItems="center">
        Conversion Rate
        <IcoMoon ml={2} icon="help" />
      </Flex>
    </StatLabel>
    <StatNumber>25.75%</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      13.36%
    </StatHelpText>
  </Stat>
);
