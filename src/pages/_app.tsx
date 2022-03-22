import GlobalStyle from "styles/globals.style";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import ProfileBar from "components/profileBar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <MainContainer>
        <Component {...pageProps} />
        <ProfileBar />
      </MainContainer>
    </ThemeProvider>
  );
}

export default MyApp;
