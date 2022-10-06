import MainContainer from "components/containers/MainContainer";
import {
  FooterCol,
  FooterCopy,
  FooterInner,
  FooterLink,
  FooterNav,
  FooterSocials,
  FooterTitle,
  FooterWrapper,
} from "./Footer.style";
import FacebookIcon from "/public/icons/facebook.svg";
import TwitterIcon from "/public/icons/twitter.svg";
import InstagramIcon from "/public/icons/instagram.svg";
import { format } from "date-fns";
import { ka } from "date-fns/locale";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <MainContainer>
        <FooterInner>
          <FooterNav>
            <FooterCol>
              <FooterTitle>Delivery</FooterTitle>
              <FooterLink>Order Products Faster Easier</FooterLink>
            </FooterCol>
            <FooterCol>
              <FooterTitle>Our Services</FooterTitle>
              <FooterLink>Pricing</FooterLink>
              <FooterLink>Discounts</FooterLink>
              <FooterLink>Report a bug</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterCol>
            <FooterCol>
              <FooterTitle>Our Company</FooterTitle>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Our Mission</FooterLink>
              <FooterLink>Get in touch</FooterLink>
            </FooterCol>
            <FooterCol>
              <FooterTitle>Community</FooterTitle>
              <FooterLink>Support</FooterLink>
              <FooterLink>Questions</FooterLink>
              <FooterLink>Customer Help</FooterLink>
            </FooterCol>
            <FooterCol>
              <FooterSocials>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </FooterSocials>
            </FooterCol>
          </FooterNav>
          <FooterCopy>
            © All rights reserved 2022 - {format(new Date(), "YYY")}
          </FooterCopy>
        </FooterInner>
      </MainContainer>
    </FooterWrapper>
  );
};
