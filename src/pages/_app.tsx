import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import { SessionProvider } from "next-auth/react";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
