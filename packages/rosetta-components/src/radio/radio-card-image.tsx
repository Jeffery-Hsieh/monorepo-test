import { Box, Image, ImageProps } from "@chakra-ui/react";

export const RadioCardImage = (props: ImageProps) => {
  return (
    <Box w="72px" h="72px" flexShrink={0} borderRadius="md" overflow="hidden">
      <Image w="100%" h="100%" objectFit="cover" {...props} />
    </Box>
  );
};
