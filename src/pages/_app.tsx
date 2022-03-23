import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import ProfileBar from "components/profileBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Component {...pageProps} />
        <ProfileBar />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
