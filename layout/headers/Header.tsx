import MainContainer from "components/containers/MainContainer";
import { HeaderInner, HeaderLogo, HeaderWrapper } from "./Header.style";
import LogoIcon from "public/icons/logo.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <MainContainer>
        <HeaderInner>
          <HeaderLogo>
            <LogoIcon />
          </HeaderLogo>
        </HeaderInner>
      </MainContainer>
    </HeaderWrapper>
  );
};
export default Header;
