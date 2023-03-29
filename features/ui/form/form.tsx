import { color } from "@styles/theme";
import styled, { css } from "styled-components";

export interface FormProps {
  label?: string | null;
  hint?: string | null;
  error?: boolean | null;
  children: React.ReactNode;
}

const FormWrap = styled.div``;

const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${color("gray", 700)};
  margin-bottom: 8px;
`;

const Hint = styled.div<{ error?: boolean | null }>`
  font-weight: 400;
  font-size: 14px;
  color: ${color("gray", 500)};
  margin-top: 8px;

  ${(props) => {
    if (props.error) {
      return css`
        color: ${color("error", 500)};
      `;
    }
  }};
`;

export function Form({ label, hint, error, children }: FormProps) {
  return (
    <FormWrap>
      {label && <Label>{label}</Label>}
      {children}
      {hint && <Hint error={error}>{hint}</Hint>}
    </FormWrap>
  );
}
