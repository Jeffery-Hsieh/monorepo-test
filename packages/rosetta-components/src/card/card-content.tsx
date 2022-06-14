import { VStack, StackProps } from "@chakra-ui/react";

export const CardContent = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <VStack w="100%" p="4" spacing="1" alignItems="flex-start" {...rest}>
      {children}
    </VStack>
  );
};
