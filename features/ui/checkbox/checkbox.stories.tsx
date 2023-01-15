import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  children,
  size,
  checked,
  intermediate,
  label,
  disabled,
}) => (
  <div style={{ padding: 50 }}>
    <Checkbox
      size={size}
      checked={checked}
      intermediate={intermediate}
      label={label}
      disabled={disabled}
    >
      {children}
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
