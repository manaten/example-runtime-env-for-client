import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Logo } from "./Logo";

const meta: ComponentMeta<typeof Logo> = {
  title: "atoms/Logo",
  component: Logo,
  argTypes: {
  },
};

export default meta;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
};