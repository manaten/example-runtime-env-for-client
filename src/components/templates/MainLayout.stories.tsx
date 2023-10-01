import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { MainLayout } from "./MainLayout";

const meta: ComponentMeta<typeof MainLayout> = {
  title: "templates/MainLayout",
  component: MainLayout,
  argTypes: {
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, World!"
};

