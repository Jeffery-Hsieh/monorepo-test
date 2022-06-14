import { useState, ChangeEvent } from "react";
import { VStack, RadioGroup, Box } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  RadioCardCenter,
  RadioCardImage,
  RadioButton,
  RadioCard,
  RadioCardTitle,
  RadioCardContent,
  RadioCardText,
  RadioCardInput,
} from "../radio";
import { TextInput } from "../input";

export default {
  title: "Form/Radio",
};

export const Default = () => {
  const [inputValue, setTextInputValue] = useState<string>("");

  const customInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = String(e.target.value);
    setTextInputValue(nextValue);
  };

  return (
    <RadioGroup as={VStack} spacing="2" w="300px" alignItems="flex-start">
      <RadioCard type="solid" value="option 1">
        <RadioButton />
        <RadioCardContent>
          <RadioCardTitle fontSize="rosetta.md">
            Label 1 goes here
          </RadioCardTitle>
          <RadioCardInput
            value={inputValue}
            onChange={customInputChange}
            placeholder="https://"
          />
        </RadioCardContent>
      </RadioCard>
      <RadioCard type="solid" value="option 2">
        <RadioButton />
        <RadioCardContent>
          <RadioCardTitle fontSize="rosetta.md">
            Label 2 goes here
          </RadioCardTitle>
          <RadioCardText mt="0.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </RadioCardText>
        </RadioCardContent>
      </RadioCard>
      <RadioCard type="solid" value="option 3" isDisabled>
        <RadioButton />
        <RadioCardContent>
          <RadioCardTitle fontSize="rosetta.md">
            Label 3 goes here
          </RadioCardTitle>
          <RadioCardText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </RadioCardText>
        </RadioCardContent>
      </RadioCard>
      <RadioCard type="solid" value="custom">
        <RadioButton />
        <RadioCardContent>
          <RadioCardTitle fontSize="rosetta.md">
            Label 4 goes here
          </RadioCardTitle>
          <RadioCardText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </RadioCardText>
        </RadioCardContent>
      </RadioCard>
    </RadioGroup>
  );
};

export const RadioChoiceBox = () => {
  return (
    <RadioGroup as={VStack} w="200px" spacing="3">
      <RadioCard value="item 1" type="outline">
        <RadioCardCenter>
          <RadioCardTitle>Choice box 1</RadioCardTitle>
        </RadioCardCenter>
      </RadioCard>
      <RadioCard value="item 2" type="outline">
        <RadioCardCenter>
          <RadioCardTitle>Choice box 2</RadioCardTitle>
        </RadioCardCenter>
      </RadioCard>
      <RadioCard value="item 3" type="outline" isDisabled>
        <RadioCardCenter>
          <RadioCardTitle>Choice box 3</RadioCardTitle>
        </RadioCardCenter>
      </RadioCard>
    </RadioGroup>
  );
};

/**
 * @todo The radio box should be checked if input element is clicked
 */

export const RadioCardWithImage = () => {
  return (
    <RadioGroup as={VStack} spacing="2" w="300px">
      <RadioCard type="outline" value="option 1">
        <RadioCardImage src="https://picsum.photos/200/300" />
        <RadioCardContent justifyContent="center">
          <RadioCardTitle>Choice item 1</RadioCardTitle>
        </RadioCardContent>
      </RadioCard>
      <RadioCard type="outline" value="option 2">
        <RadioCardImage src="https://picsum.photos/200/300" />
        <RadioCardContent justifyContent="center">
          <RadioCardTitle>Choice item 2</RadioCardTitle>
          <RadioCardText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </RadioCardText>
        </RadioCardContent>
      </RadioCard>
      <RadioCard type="outline" value="option 3" isDisabled alignItems="center">
        <RadioCardImage src="https://picsum.photos/200/300" />
        <RadioCardContent justifyContent="center">
          <RadioCardTitle>Choice item 3</RadioCardTitle>
          <RadioCardText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </RadioCardText>
        </RadioCardContent>
      </RadioCard>
      <RadioCard type="outline" value="custom">
        <RadioCardImage src="https://picsum.photos/200/300" />
        <RadioCardContent justifyContent="center" w="100%">
          <RadioCardInput
            h="100%"
            border="none"
            focusBorderColor="none"
            placeholder="Please specify..."
            isInputHiddenWhenUnChecked
          />
        </RadioCardContent>
      </RadioCard>
    </RadioGroup>
  );
};
