import { AppProps } from "next/dist/shared/lib/router/router";
import theme from "../styled/theme";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import AnimationPage from "layout/aniamtionPAge/AnimationPage";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AnimationPage>
        <Component {...pageProps} />
      </AnimationPage>
    </ThemeProvider>
  );
}

export default MyApp;
