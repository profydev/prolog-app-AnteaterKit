import styled, { css } from "styled-components";
import { breakpoint, color } from "@styles/theme";

const menuItems = [
  { text: "Docs" },
  { text: "Api" },
  { text: "Help" },
  { text: "Community" },
];

const footerStyle = css`
  background-color: ${color("gray", 50)};
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 24px;
  display: grid;
  grid-template-areas: "menu" "logo" "ver";

  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 0px;
    padding-bottom: 0px;
    gap: 0px;
  }
`;

const FooterContainer = styled.footer`
  ${footerStyle}
`;

const Version = styled.div`
  color: ${color("gray", 400)};
  grid-area: ver;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoint("desktop")}) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const MenuItem = styled.div`
  color: ${color("gray", 500)};
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoint("desktop")}) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-right: 88px;
  margin-left: auto;
  margin-right: auto;
  grid-area: menu;
  @media (min-width: ${breakpoint("desktop")}) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const Menu = menuItems.map((item, index) => (
  <MenuItem key={index}>{item.text}</MenuItem>
));

const Logo = styled.img`
  grid-area: logo;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoint("desktop")}) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <Version>Version: {process.env.NEXT_PUBLIC_APP_VERSION}</Version>
      <MenuWrapper>{Menu}</MenuWrapper>
      <Logo src={"/icons/logo-small.svg"} alt="logo" />
    </FooterContainer>
  );
}
