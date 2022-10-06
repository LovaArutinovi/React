import MainContainer from "components/containers/MainContainer";
import styled from "styled-components";
import {
  HeaderInner,
  HeaderLogo,
  HeaderLogoImg,
  HeaderNav,
  HeaderNavLink,
  HeaderOrder,
  HeaderWrapper,
} from "./Header.style";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonLink from "components/atoms/ButtonLink/ButtonLink";
import Modal from "components/templates/Modal";
import { useState } from "react";

const Header = (): JSX.Element => {
  const router = useRouter();
  const pathName = router.pathname;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <MainContainer>
          <HeaderInner>
            <HeaderLogo href="/">
              <HeaderLogoImg />
            </HeaderLogo>
            <HeaderNav>
              <Link href="/">
                <HeaderNavLink active={pathName === "/"}>Home</HeaderNavLink>
              </Link>
              <Link href="/about">
                <HeaderNavLink active={pathName === "/about"}>
                  About Us
                </HeaderNavLink>
              </Link>
              <Link href="/services">
                <HeaderNavLink active={pathName === "/services"}>
                  Services
                </HeaderNavLink>
              </Link>
              <Link href="/contact">
                <HeaderNavLink active={pathName === "/contact"}>
                  Contact Us
                </HeaderNavLink>
              </Link>
            </HeaderNav>
            <HeaderOrder>
              <ButtonLink onClick={() => setOpenModal(true)}>
                Order Now!
              </ButtonLink>
            </HeaderOrder>
          </HeaderInner>
        </MainContainer>
      </HeaderWrapper>
      <Modal
        isOpen={openModal}
        onClose={() => console.log("close")}
        closeFunction={() => setOpenModal(false)}
      >
        Hello
      </Modal>
    </>
  );
};
export default Header;
