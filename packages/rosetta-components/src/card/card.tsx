import { Flex, FlexProps } from "@chakra-ui/react";

export const Card = (props: FlexProps) => {
  const { children, ...rest } = props;

  return (
    <Flex
      display="inline-flex"
      justifyContent="space-between"
      borderColor="rosetta.gray.100"
      borderWidth="1px"
      {...rest}
    >
      {children}
    </Flex>
  );
};
