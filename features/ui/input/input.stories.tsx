import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";
import { Form } from "../form";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>;

const valueEmpty = "Type value";
const TemplateBasic: ComponentStory<typeof Input> = ({
  placeHolder,
  value,
  disabled,
  userIcon,
  error,
  children,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      placeHolder={valueEmpty}
      value={value}
      disabled={disabled}
      userIcon={userIcon}
      error={error}
    >
      {children}
    </Input>
  </div>
);

export const Default = TemplateBasic.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};

const valueDisabled = "Phoenix Baker";
const TemplateDisabled: ComponentStory<typeof Input> = ({
  placeHolder,
  value,
  disabled,
  userIcon,
  children,
  error,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      placeHolder={placeHolder}
      value={valueDisabled}
      disabled={true}
      userIcon={userIcon}
      error={error}
    >
      {children}
    </Input>
  </div>
);

export const Disabled = TemplateDisabled.bind({});
Disabled.args = {};
Disabled.parameters = {
  viewMode: "docs",
};

const valueIcon = "Phoenix Baker";
const TemplateIcon: ComponentStory<typeof Input> = ({
  placeHolder,
  value,
  disabled,
  userIcon,
  children,
  error,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      placeHolder={placeHolder}
      value={valueIcon}
      disabled={disabled}
      userIcon={true}
      error={error}
    >
      {children}
    </Input>
  </div>
);

export const Template = TemplateIcon.bind({});
Template.args = {};
Template.parameters = {
  viewMode: "docs",
};

const hint = "This is a hint text to help user.";
const lbl = "Team member";
const valueForm = "Phoenix Baker";
const TemplateForm: ComponentStory<typeof Input> = ({
  placeHolder,
  value,
  disabled,
  userIcon,
  children,
  error,
}) => (
  <div style={{ padding: 50 }}>
    <Form hint={hint} label={lbl}>
      <Input
        placeHolder={placeHolder}
        value={valueForm}
        disabled={disabled}
        userIcon={true}
        error={error}
      >
        {children}
      </Input>
    </Form>
  </div>
);

export const InputForm = TemplateForm.bind({});
InputForm.args = {};
InputForm.parameters = {
  viewMode: "docs",
};

const TemplateError: ComponentStory<typeof Input> = ({
  children,
  placeHolder,
  disabled,
  userIcon,
}) => (
  <div style={{ padding: 50 }}>
    <Form error={true} hint={hint} label={lbl}>
      <Input
        placeHolder={placeHolder}
        disabled={disabled}
        userIcon={userIcon}
        error={true}
      >
        {children}
      </Input>
    </Form>
  </div>
);

export const Error = TemplateError.bind({});
Error.args = {};
Error.parameters = {
  viewMode: "docs",
};
