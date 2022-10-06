import styled from "styled-components";

export const FooterWrapper = styled.footer`
   padding: 93px 0 47px;
   background: ${props => props.theme.colors.yellow};
   @media ${props => props.theme.breakpoints.md}{
      padding: 50px 0 30px;

   }
`;

export const FooterInner = styled.div``;

export const FooterNav = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 80px;
   margin-bottom: 122px;
   flex-wrap: wrap;
   @media ${props => props.theme.breakpoints.md}{
      gap: 35px;
      margin-bottom: 50px;
   }
`;

export const FooterCol = styled.div`
   display: flex;
   flex-direction: column;
`;

export const FooterTitle = styled.h3`
   margin-bottom: 22px;

   font-weight: 600;
   font-size: 20px;
   line-height: 30px;
   cursor: pointer;
`;
export const FooterLink = styled.a`
   margin-bottom: 8px;

   font-weight: 600;
   font-size: 15px;
   line-height: 22px;
   color: ${props => props.theme.colors.gray};
`;
export const FooterSocials = styled.div`
   display: flex;
   gap: 40px;
   & svg{
      cursor: pointer;
      transition: all .2s;
   }
   & svg:hover{
      transform: scale(1.1);
   }
`;
export const FooterCopy = styled.p`
   text-align: center;
   font-weight: 500;
   font-size: 15px;
   color: ${props => props.theme.colors.gray};
   line-height: 22px;
`;