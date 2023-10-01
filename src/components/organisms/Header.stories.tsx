import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Header } from "./Header";

const meta: ComponentMeta<typeof Header> = {
  title: "organisms/Header",
  component: Header,
  argTypes: {
  },
};

export default meta;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Header"
};
