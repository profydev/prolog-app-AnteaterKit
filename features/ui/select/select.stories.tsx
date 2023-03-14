import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./index";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => (
  <div style={{ padding: 50 }}>
    <Select></Select>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
