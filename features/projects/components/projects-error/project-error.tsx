import styled, { css } from "styled-components";
import { breakpoint, color } from "@styles/theme";

type ErrorProps = {
  reload: () => void;
};

const ErrorContainer = styled.div`
  border: 1px solid ${color("error", 300)};
  background-color: ${color("error", 25)};
  border-radius: 8px;
  display: flex;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const IconMsgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13.5px;
`;

const Icon = styled.img``;

const Msg = styled.div`
  color: ${color("error", 700)};
  font-size: 14px;
  font-weight: 500;
`;

const AgainWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12.7px;
  margin-left: auto;
  cursor: pointer;
`;

const BtnText = styled.div`
  color: ${color("error", 700)};
  font-size: 14px;
  font-weight: 500;
  min-width: 63px;
`;

export function ProjectsError(props: ErrorProps) {
  const tryAgain = () => {
    props.reload();
  };

  return (
    <ErrorContainer data-cy="error-load">
      <IconMsgWrapper>
        <Icon src="/icons/alert-circle.svg"></Icon>
        <Msg>There was a problem while loading the project data</Msg>
      </IconMsgWrapper>
      <AgainWrap onClick={() => tryAgain()}>
        <BtnText id="">Try again</BtnText>
        <Icon src="/icons/arrow-right.svg"></Icon>
      </AgainWrap>
    </ErrorContainer>
  );
}
