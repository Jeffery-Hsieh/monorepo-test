import {
  Card,
  CardLabel,
  CardTitle,
  CardText,
  CardImage,
  CardContent,
} from "../card";
import { VStack, Box } from "@chakra-ui/react";

export default {
  title: "Component/Card",
};

export const Default = () => (
  <VStack alignItems="flex-start">
    <Card w="300px">
      <CardContent>
        <CardLabel>SLEEVE</CardLabel>
        <CardTitle>Long Sleeves</CardTitle>
        <CardText>Short Sleeve</CardText>
      </CardContent>
      <CardImage src="https://picsum.photos/id/21/200/300" />
    </Card>
    <Card w="500px">
      <CardContent>
        <CardLabel>SLEEVE</CardLabel>
        <CardTitle>Long Sleeves</CardTitle>
        <CardText>Short Sleeve</CardText>
      </CardContent>
      <CardImage src="https://picsum.photos/id/21/200/300" />
    </Card>
  </VStack>
);

export const WithLongWords = () => (
  <VStack alignItems="flex-start">
    <Card w="300px">
      <CardContent>
        <CardLabel>SLEEVE</CardLabel>
        <CardTitle>
          reprehenderit blanditiis quas? Consectetur veniam illum commodi ad
          debitis labore mollitia, molestiae error dolore laborum amet?
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          harum in quam rem ad,
        </CardText>
        <CardText>3/4 Sleeves</CardText>
      </CardContent>
      <CardImage src="https://picsum.photos/id/1027/200/300" />
    </Card>
    <Card w="500px">
      <CardContent>
        <CardLabel>SLEEVE</CardLabel>
        <CardTitle>
          reprehenderit blanditiis quas? Consectetur veniam illum commodi ad
          debitis labore mollitia, molestiae error dolore laborum amet?
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          harum in quam rem ad,
        </CardText>
        <CardText>3/4 Sleeves</CardText>
      </CardContent>
      <CardImage src="https://picsum.photos/id/1027/200/300" />
    </Card>
  </VStack>
);

export const WithVerticleStack = () => (
  <Card p="4" w="300px" flexDirection="column">
    <Box position="relative" pt="100%">
      <CardImage
        top="0"
        left="0"
        position="absolute"
        w="100%"
        h="100%"
        src="https://picsum.photos/id/1027/200/300"
      />
    </Box>
    <CardContent p="0" pt="3">
      <CardText textStyle="sm-regular">Striped Rufflw Cotton Shirt</CardText>
      <CardText textStyle="sm-regular" color="rosetta.gray.500">
        NT$ 955.00
      </CardText>
    </CardContent>
  </Card>
);
