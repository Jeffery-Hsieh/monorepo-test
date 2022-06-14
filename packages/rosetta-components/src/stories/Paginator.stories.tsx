import { useState } from "react";
import { ComponentStory } from "@storybook/react";
import { Paginator } from "../paginator";

export default {
  title: "Component/Paginator",
  component: Paginator,
};

const Template: ComponentStory<typeof Paginator> = (args) => {
  const [_, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return <Paginator {...args} onPageChange={handlePageChange} />;
};

export const Default = Template.bind({});
Default.args = {
  defaultPage: 1,
  total: 50,
  pageSize: 10,
};
