import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

import { RecoilRoot } from "recoil";

import NavBar from "components/navBar";

import ProfileBar from "components/profileBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
