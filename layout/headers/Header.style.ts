import styled from "styled-components";
import LogoIcon from "public/icons/logo.svg";
import Link from 'next/link';
import { IsActive } from "untils/PopularInterfaces";


export const HeaderWrapper = styled.header`
   background: ${props => props.theme.colors.white};
`;

export const HeaderInner = styled.div`
   padding: 44px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const HeaderLogo = styled(Link)`
   cursor: pointer;
   flex-basis: 25%;
`;

export const HeaderLogoImg = styled(LogoIcon)`
   transition: all .2s;
   cursor: pointer;
   &:hover{
      fill: ${props => props.theme.colors.white};
      stroke: ${props => props.theme.colors.black}
   }
`;
export const HeaderNav = styled.nav`
   flex-basis: 50%;
   display: flex;
   justify-content: center;
   gap: 69px;
`;


export const HeaderNavLink = styled.a<IsActive>`
   position: relative;
   color: ${(props) => props.theme.colors.black};
   cursor: pointer;
   transition: all .2s;
   
   &:hover{
      color: transparent;
      -webkit-text-stroke: 1px ${(props) => props.theme.colors.black};
   }
   &::after{
      content: '';
      position: absolute;
      bottom: -13px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      transition: all .2s;
      background: ${(props) => (props.active ? props.theme.colors.black : "transparent")};
   }
`;

export const HeaderOrder = styled.div`
   flex-basis: 25%;
`;
