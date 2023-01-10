import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UIButton } from ".//button-ui";
import { size } from "lodash";

export default {
  title: "UI/Button",
  component: UIButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof UIButton>;

const Template: ComponentStory<typeof UIButton> = ({ size, color }) => (
  <div style={{ padding: 50 }}>
    <UIButton size={size} color={color}>
      Button CTA
    </UIButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
