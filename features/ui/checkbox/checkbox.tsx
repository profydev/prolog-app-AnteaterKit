import styled, { css } from "styled-components";
import { breakpoint, color } from "@styles/theme";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export interface CheckboxProps {
  children?: React.ReactNode;
  size?: CheckboxSize;
  checked?: boolean;
  intermediate?: boolean;
  label?: string;
  onChange?: () => boolean;
}

const BoxWrap = styled.div<{ size?: CheckboxSize }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;

  ${(props) => {
    if (props.size === CheckboxSize.md) {
      return css`
        width: 20px;
        height: 20px;
      `;
    }
  }};
`;

const Input = styled.input`
  background: none;
`;

const BoxInner = styled.span<{
  checked?: boolean;
  intermediate?: boolean;
  size?: CheckboxSize;
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 16px;
  height: 16px;
  border: 1px solid ${color("gray", 300)};
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;

  ${(props) => {
    if (props.size === CheckboxSize.md) {
      return css`
        width: 20px;
        height: 20px;
      `;
    }
  }};

  ${(props) => {
    if (props.checked || props.intermediate) {
      return css`
        border: 1px solid ${color("primary", 600)};
        background: ${color("primary", 50)};
      `;
    }
  }};

  &:after {
    ${(props) => {
      if (props.intermediate) {
        return css`
          position: absolute;
          display: table;
          border: 1.67px solid #7f56d9;
          border-top: 0;
          border-left: 0;
          opacity: 1;
          top: 47%;
          left: 23%;
          display: table;
          width: 7px;
          content: "";
        `;
      }
      if (props.checked) {
        return css`
          position: absolute;
          display: table;
          border: 1.67px solid ${color("primary", 600)};
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          opacity: 1;
          top: 47%;
          left: 21%;
          display: table;
          width: 4px;
          height: 8px;
          content: "";
        `;
      }
    }};

    ${(props) => {
      if (props.intermediate && props.size === CheckboxSize.md) {
        return css`
          position: absolute;
          display: table;
          border: 2px solid #7f56d9;
          border-top: 0;
          border-left: 0;
          opacity: 1;
          top: 47%;
          left: 23%;
          display: table;
          width: 9px;
          height: 0px;
          content: "";
        `;
      }
    }};

    ${(props) => {
      if (
        props.checked &&
        props.size === CheckboxSize.md &&
        !props.intermediate
      ) {
        return css`
          border: 2px solid ${color("primary", 600)};
          border-top: 0;
          border-left: 0;
          left: 23%;
          width: 6px;
          height: 10px;
        `;
      }
    }};
  }
`;

const Label = styled.span<{ size?: CheckboxSize }>`
  margin-left: 8px;
  color: ${color("gray", 700)};
  font-size: 14px;
  font-weight: 500;

  ${(props) => {
    if (props.size === CheckboxSize.md) {
      return css`
        font-size: 16px;
        margin-left: 12px;
      `;
    }
  }};
`;

export function Checkbox({
  size,
  checked,
  intermediate,
  label,
}: CheckboxProps) {
  const checkChanged = () => {
    console.log("sss");
  };

  return (
    <BoxWrap size={size} onClick={checkChanged}>
      <Input type="checkbox"></Input>
      <BoxInner
        checked={checked}
        intermediate={intermediate}
        size={size}
      ></BoxInner>
      {label && <Label size={size}>{label}</Label>}
    </BoxWrap>
  );
}
