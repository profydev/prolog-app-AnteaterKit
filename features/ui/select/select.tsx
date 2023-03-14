import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import ReactDOM, { createPortal } from "react-dom";
import React from "react";

type Coords = {
  left: number;
  top: number;
  width: number;
};

export interface SelectProps {
  children: React.ReactNode;
}

const MenuPortal = styled.div<{ coords: Coords | null }>`
  position: absolute;
  z-index: 10111;
  left: ${(p) => `${p.coords?.left}px`};
  top: ${(p) => `${p.coords?.top}px`};
  width: 100px;
  min-height: 40px;
`;

const Menu = styled.div`
  border: 1px solid;
  border-radius: 16px;
`;

const Item = styled.div``;

// https://habr.com/ru/post/594303/

const SelectWrap = styled.div<{ ref: any }>`
  border: 1px solid;
  position: relative;
`;

export function Select() {
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState<Coords | null>(null);

  const getCoords = (
    ref: React.RefObject<HTMLButtonElement>
  ): Coords | null => {
    const box = ref.current?.getBoundingClientRect();

    if (box) {
      return {
        left: box.left,
        top: box.top + box.height,
        width: box.width,
      };
    }

    return null;
  };

  /* useEffect(() => {
    if (!open) return;

    const coords = getCoords(controlRef);
    setCoords(coords);
  }, [open]);
  */

  return (
    <SelectWrap ref={controlRef}>
      <div></div>
      {!open && <div onClick={() => setOpen(true)}>open</div>}
      {open && <div onClick={() => setOpen(false)}>close</div>}
      {open &&
        createPortal(
          <MenuPortal coords={getCoords(controlRef)}>
            <Menu>
              <Item>10</Item>
              <Item>11</Item>
            </Menu>
          </MenuPortal>,
          document.body
        )}
    </SelectWrap>
  );
}
