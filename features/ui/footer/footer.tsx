import styled, { css } from "styled-components";
import { color } from "@styles/theme";

const menuItems = [
  { text: "Docs" },
  { text: "Api" },
  { text: "Help" },
  { text: "Community" },
];

const footerStyle = css`
  background-color: ${color("gray", 50)};
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  padding-left: 32px;
  padding-right: 32px;
`;

const FooterContainer = styled.div`
  ${footerStyle}
`;

const Version = styled.div`
  color: ${color("gray", 400)};
`;

const MenuItem = styled.div`
  color: ${color("gray", 500)};
  font-size: 16px;
  font-weight: 500;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-right: 88px;
`;
const Menu = menuItems.map((item, index) => (
  <MenuItem key={index}>{item.text}</MenuItem>
));

const Logo = styled.img``;

export function Footer() {
  return (
    <FooterContainer>
      <Version>Version: {process.env.NEXT_PUBLIC_APP_VERSION}</Version>
      <MenuWrapper>{Menu}</MenuWrapper>
      <Logo src={"/icons/logo-small.svg"} alt="logo" />
    </FooterContainer>
  );
}
