import {
  PopoverContent as ChakraPopoverContent,
  PopoverContentProps,
} from "@chakra-ui/react";

export const PopoverContent = (props: PopoverContentProps) => {
  return (
    <ChakraPopoverContent
      boxShadow="0px 0px 0px 1px #F8F8F8"
      p={4}
      _focus={{
        outline: "unset",
      }}
      {...props}
    />
  );
};
