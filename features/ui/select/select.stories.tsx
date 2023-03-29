import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./index";
import { SelectOption } from "./select";
import { Form } from "../form";

const defOptions: SelectOption[] = [
  {
    key: "1",
    value: 1,
    label: "Phoenix Baker",
  },
  {
    key: "2",
    value: 2,
    label: "Olivia Rhye",
  },
];

const defPlaceholder = "select options";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const TemplateBasic: ComponentStory<typeof Select> = ({
  children,
  placeHolder,
  disabled,
  userIcon,
}) => (
  <div style={{ padding: 50 }}>
    <Select
      isStorybook={true}
      placeHolder={placeHolder ?? defPlaceholder}
      disabled={disabled}
      userIcon={userIcon}
      options={defOptions}
    >
      {children}
    </Select>
  </div>
);

export const Default = TemplateBasic.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};

const hint = "This is a hint text to help user.";
const lbl = "Team member";
const Template: ComponentStory<typeof Select> = ({
  children,
  placeHolder,
  disabled,
  userIcon,
}) => (
  <div style={{ padding: 50 }}>
    <Form hint={hint} label={lbl}>
      <Select
        isStorybook={true}
        placeHolder={placeHolder ?? defPlaceholder}
        disabled={disabled}
        userIcon={userIcon}
        options={defOptions}
      >
        {children}
      </Select>
    </Form>
  </div>
);

export const LabelAndHint = Template.bind({});
LabelAndHint.args = {};
LabelAndHint.parameters = {
  viewMode: "docs",
};

const TemplateIcon: ComponentStory<typeof Select> = ({
  children,
  placeHolder,
  disabled,
}) => (
  <div style={{ padding: 50 }}>
    <Form>
      <Select
        isStorybook={true}
        placeHolder={placeHolder ?? defPlaceholder}
        disabled={disabled}
        userIcon={true}
        options={defOptions}
      >
        {children}
      </Select>
    </Form>
  </div>
);

export const Icon = TemplateIcon.bind({});
Icon.args = {};
Icon.parameters = {
  viewMode: "docs",
};

const TemplateError: ComponentStory<typeof Select> = ({
  children,
  placeHolder,
  disabled,
  userIcon,
}) => (
  <div style={{ padding: 50 }}>
    <Form error={true} hint={hint} label={lbl}>
      <Select
        isStorybook={true}
        placeHolder={placeHolder ?? defPlaceholder}
        disabled={disabled}
        userIcon={userIcon}
        options={defOptions}
        error={true}
      >
        {children}
      </Select>
    </Form>
  </div>
);

export const Error = TemplateError.bind({});
Error.args = {};
Error.parameters = {
  viewMode: "docs",
};
