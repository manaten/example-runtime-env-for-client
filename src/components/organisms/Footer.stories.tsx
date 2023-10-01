import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Footer } from "./Footer";

const meta: ComponentMeta<typeof Footer> = {
  title: "organisms/Footer",
  component: Footer,
  argTypes: {
  },
};

export default meta;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Footer"
};
