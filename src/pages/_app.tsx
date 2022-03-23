import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import ProfileBar from "components/profileBar";
import styled from "styled-components";

const All = styled.div`
  display: flex;
  justify-content: space-between;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <All>
        <Component {...pageProps} />
        <ProfileBar />
      </All>
    </ThemeProvider>
  );
}

export default MyApp;
