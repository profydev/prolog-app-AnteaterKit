import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
import { color } from "@styles/theme";
import React, { MouseEvent } from "react";

type RawValue = string | number;

type Coords = {
  left: number;
  top: number;
  width: number;
};

export interface SelectOption {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
}

export interface SelectProps {
  isStorybook: boolean;
  placeHolder: string;
  options: SelectOption[];
  disabled: boolean;
  userIcon: boolean;
  error?: boolean | null;
  children: React.ReactNode;
}

const MenuPortal = styled.div<{ coords: Coords | null }>`
  position: absolute;
  z-index: 10111;
  left: ${(p) => `${p.coords?.left}px`};
  top: ${(p) => `${p.coords?.top}px`};
  width: ${(p) => `${p.coords?.width}px`};
  min-height: 40px;
`;

const Menu = styled.div`
  border: 0px solid;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const Item = styled.div<{ isSeleted: boolean }>`
  color: ${color("gray", 900)};
  font-size: 16px;
  line-height: 24px;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  &:hover {
    cursor: pointer;
    background-color: ${color("primary", 25)};
  }
  ${(props) => {
    if (props.isSeleted) {
      return css`
        background-color: ${color("primary", 25)};
      `;
    }
  }};
`;

export const Icon = styled.img`
  margin-left: auto;
`;

export const UserIcon = styled.img`
  margin-right: 8px;
`;

const PlaceHolder = styled.div`
  color: ${color("gray", 500)};
  font-size: 16px;
`;

const Label = styled.div`
  color: ${color("gray", 900)};
  font-size: 16px;
`;

// https://habr.com/ru/post/594303/

const SelectWrap = styled.div<{
  ref: React.RefObject<HTMLDivElement>;
  open: boolean;
  disabled: boolean;
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
  cursor: pointer;

  ${(props) => {
    if (props.open && !props.error) {
      return css`
        border: 1px solid ${color("primary", 300)};
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
      `;
    }
    if (props.open && props.error) {
      return css`
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #fee4e2;
      `;
    }
  }};

  &:focus {
    ${(props) => {
      if (props.error) {
        return css`
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
            0px 0px 0px 4px #fee4e2;
        `;
      }
      if (!props.disabled) {
        return css`
          border: 1px solid ${color("primary", 300)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
            0px 0px 0px 4px #f4ebff;
        `;
      }
    }};
  }

  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: ${color("gray", 50)};
        border: 1px solid ${color("gray", 300)};
        pointer-events: none;
      `;
    }
  }};

  ${(props) => {
    if (props.error) {
      return css`
        border: 1px solid ${color("error", 300)};
      `;
    }
  }};
`;

export function Select({
  isStorybook,
  placeHolder,
  options,
  disabled,
  error,
  userIcon,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<SelectOption | null>(null);

  let target: HTMLElement | null = null;
  if (typeof document !== "undefined") {
    const id = isStorybook ? "docs-root" : "portal";
    target = document?.getElementById(id);
  }

  const getCoords = (ref: React.RefObject<HTMLDivElement>): Coords | null => {
    const box = ref.current?.getBoundingClientRect();
    if (box) {
      return {
        left: box.left,
        top: box.top + box.height + window.pageYOffset,
        width: box.width,
      };
    }

    return null;
  };

  const onItemClick = (option: SelectOption) => {
    setSelectedValue(option);
  };

  const isSeleted = (option: SelectOption): boolean => {
    return option.value === selectedValue?.value;
  };

  const getSelectedLabal = () => {
    return selectedValue?.label;
  };

  const selectClick = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen(!open);
  };

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  return (
    <SelectWrap
      ref={controlRef}
      open={open}
      disabled={disabled}
      error={error}
      onClick={selectClick}
    >
      {userIcon && <UserIcon src="/icons/user.svg"></UserIcon>}
      {selectedValue && <Label>{getSelectedLabal()}</Label>}
      {!selectedValue && <PlaceHolder>{placeHolder}</PlaceHolder>}
      {open &&
        target &&
        createPortal(
          <MenuPortal coords={getCoords(controlRef)}>
            <Menu>
              {options.map((opt) => (
                <Item
                  key={opt.key}
                  isSeleted={isSeleted(opt)}
                  onClick={() => onItemClick(opt)}
                >
                  {userIcon && <UserIcon src="/icons/user.svg"></UserIcon>}
                  {opt.label}
                  {isSeleted(opt) && <Icon src="/icons/check.svg"></Icon>}
                </Item>
              ))}
            </Menu>
          </MenuPortal>,
          target
        )}
      {!open && <Icon src="/icons/chevron-down.svg"></Icon>}
      {open && <Icon src="/icons/chevron-up.svg"></Icon>}
    </SelectWrap>
  );
}
