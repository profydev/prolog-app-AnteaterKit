import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UIButton } from ".//button-ui";

export default {
  title: "UI/Button",
  component: UIButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof UIButton>;

const Template: ComponentStory<typeof UIButton> = ({
  size,
  color,
  disabled,
  iconPosition,
}) => (
  <div style={{ padding: 50 }}>
    <UIButton
      size={size}
      color={color}
      disabled={disabled}
      iconPosition={iconPosition}
    >
      Button CTA
    </UIButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
