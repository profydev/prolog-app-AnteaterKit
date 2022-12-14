import styled, { css } from "styled-components";
import { breakpoint, color } from "@styles/theme";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  empty = "empty",
  gray = "gray",
  emptyGray = "empty gray",
  error = "error",
}

export enum IconPosition {
  none = "none",
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

export interface UIButtonProps {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  iconPosition?: IconPosition;
  disabled?: boolean;
}

const ButtonRoot = styled.button<{ size: ButtonSize }>`
  background: ${color("primary", 600)};
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 9.67px;
  width: fit-content;
  padding: 8px 14px 8px 14px;
  border: 1px solid #7f56d9;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  ${(props) => {
    switch (props.size) {
      case ButtonSize.md:
        return css`
          padding: 10px 16px 10px 16px;
        `;
      case ButtonSize.lg:
        return css`
          padding: 10px 18px 10px 18px;
        `;
      case ButtonSize.xl:
        return css`
          padding: 12px 20px 12px 20px;
        `;
    }
  }};

  ${(props) => {
    switch (props.color) {
      case ButtonColor.primary:
        return css`
          background: ${color("primary", 600)};
          color: #ffffff;
        `;
      case ButtonColor.secondary:
        return css`
          background: ${color("primary", 50)};
          border: none;
          color: ${color("primary", 700)};
        `;
      case ButtonColor.empty:
        return css`
          background: none;
          border: none;
          color: ${color("primary", 700)};
        `;
      case ButtonColor.gray:
        return css`
          background: none;
          border: 1px solid ${color("gray", 300)};
          color: ${color("gray", 700)};
        `;
      case ButtonColor.emptyGray:
        return css`
          background: none;
          border: none;
          color: ${color("gray", 500)};
        `;
      case ButtonColor.error:
        return css`
          background: ${color("error", 600)};
          border: none;
          color: #ffffff;
        `;
    }

    switch (props.size) {
      case ButtonSize.md:
        return css`
          padding: 10px 16px 10px 16px;
        `;
      case ButtonSize.lg:
        return css`
          padding: 10px 18px 10px 18px;
        `;
      case ButtonSize.xl:
        return css`
          padding: 12px 20px 12px 20px;
        `;
    }
  }};

  &:hover {
    cursor: pointer;
    ${(props) => {
      switch (props.color) {
        case ButtonColor.primary:
          return css`
            background: ${color("primary", 700)};
          `;
        case ButtonColor.secondary:
          return css`
            background: ${color("primary", 100)};
          `;
        case ButtonColor.empty:
          return css`
            background: ${color("primary", 50)};
            border: none;
            color: ${color("primary", 700)};
          `;
        case ButtonColor.gray:
          return css`
            background: ${color("gray", 300)};
            color: ${color("gray", 800)};
          `;
        case ButtonColor.emptyGray:
          return css`
            background: ${color("gray", 50)};
            color: ${color("gray", 500)};
          `;
        case ButtonColor.error:
          return css`
            background: ${color("error", 700)};
          `;
      }
    }};
  }

  &:focus {
    cursor: pointer;
    ${(props) => {
      switch (props.color) {
        case ButtonColor.primary:
          return css`
            background: ${color("primary", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f4ebff;
          `;
        case ButtonColor.secondary:
          return css`
            background: ${color("primary", 50)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f4ebff;
          `;
        case ButtonColor.empty:
          return css``;
        case ButtonColor.gray:
          return css`
            background: none;
            color: ${color("gray", 700)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #f2f4f7;
          `;
        case ButtonColor.emptyGray:
          return css`
            background: none;
            color: ${color("gray", 500)};
            box-shadow: none;
          `;
        case ButtonColor.error:
          return css`
            background: ${color("error", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px #fee4e2;
          `;
      }
    }};
  }

  &:disabled {
    pointer-events: none;
    ${(props) => {
      switch (props.color) {
        case ButtonColor.primary:
          return css`
            background: ${color("primary", 200)};
            border: 1px solid #e9d7fe;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          `;
        case ButtonColor.secondary:
          return css`
            background: ${color("primary", 25)};
            color: ${color("primary", 300)};
          `;
        case ButtonColor.empty:
          return css`
            color: ${color("gray", 300)};
          `;
        case ButtonColor.gray:
          return css`
            background: #ffffff;
            color: ${color("gray", 300)};
          `;
        case ButtonColor.emptyGray:
          return css`
            color: ${color("gray", 300)};
          `;
        case ButtonColor.error:
          return css`
            background: ${color("error", 200)};
          `;
      }
    }};
  }
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  border: 1.67px solid #ffffff;
  border-radius: 50%;
`;

export function UIButton({
  children,
  size = ButtonSize.md,
  color,
  disabled = false,
  iconPosition = IconPosition.none,
}: UIButtonProps) {
  return (
    <ButtonRoot size={size} color={color} disabled={disabled}>
      {iconPosition === IconPosition.leading && <Icon></Icon>}
      {iconPosition === IconPosition.only && <Icon></Icon>}
      {iconPosition !== IconPosition.only && children}
      {iconPosition === IconPosition.trailing && <Icon></Icon>}
    </ButtonRoot>
  );
}
