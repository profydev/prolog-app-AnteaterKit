import { color } from "@styles/theme";
import { useState } from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  placeHolder: string;
  value?: string | null;
  disabled: boolean;
  userIcon: boolean;
  error?: boolean | null;
  children: never[];
}

const InputWrap = styled.div<{
  isFocus?: boolean;
  disabled?: boolean;
  error?: boolean | null;
}>`
  border: 1px solid;
  position: relative;
  min-height: 44px;
  border-radius: 8px;
  border: 1px solid ${color("gray", 300)};
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: ${color("gray", 50)};
        border: 1px solid ${color("gray", 300)};
        pointer-events: none;
      `;
    }
    if (props.error) {
      return css`
        border: 1px solid ${color("error", 300)};
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #fee4e2;
      `;
    }
    if (!props.disabled && props.isFocus) {
      return css`
        border: 1px solid ${color("primary", 300)};
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
      `;
    }
  }};
`;

const InputInner = styled.input<{ isPlaceHolder: boolean; disabled: boolean }>`
  all: unset;
  width: 100%;
  color: ${color("gray", 900)};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  ${(props) => {
    if (props.disabled) {
      return css`
        color: ${color("gray", 500)};
      `;
    }

    if (props.isPlaceHolder) {
      return css`
        color: ${color("gray", 500)};
      `;
    }
  }};
`;

const Icon = styled.img`
  margin-right: 8px;
`;

export function Input(props: InputProps) {
  const value = props.value as string;
  const [isFocus, setFocus] = useState<boolean>(false);

  const handleInputBlur = () => {
    setFocus(false);
  };

  const handleInputFocus = () => {
    setFocus(true);
  };

  return (
    <InputWrap isFocus={isFocus} error={props.error} disabled={props.disabled}>
      {props.userIcon && <Icon src="/icons/mail.svg"></Icon>}
      <InputInner
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        value={value}
        placeholder={props.placeHolder}
        disabled={props.disabled}
        isPlaceHolder={!value}
      />
      {props.error && <Icon src="/icons/alert-circle.svg"></Icon>}
    </InputWrap>
  );
}
