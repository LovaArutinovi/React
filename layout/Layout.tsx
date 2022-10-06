import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import { Footer } from "./footer/Footer";
import Header from "./headers/Header";
import { Main, Wrapper } from "./Layout.style";
import ScrollBar from "./ScrollBar/ScrollBar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <ScrollBar>
        <Wrapper>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </ScrollBar>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
