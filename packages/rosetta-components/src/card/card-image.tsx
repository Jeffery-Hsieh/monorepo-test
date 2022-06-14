import { Image, ImageProps } from "@chakra-ui/react";

export const CardImage = (props: ImageProps) => (
  <Image w="100px" h="100%" objectFit="cover" {...props} />
);
