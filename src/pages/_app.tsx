import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

import NavBar from "components/navBar";

import ProfileBar from "components/profileBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
      <ProfileBar />
    </ThemeProvider>
  );
}

export default MyApp;
