import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

import NavBar from "components/navBar";

import ProfileBar from "components/profileBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
