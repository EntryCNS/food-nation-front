import GlobalStyle from "styles/globals.style";
import Layout from "components/layout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import { useTheme } from "hooks/useTheme";

const ThemeProviderContainer = ({ Component, pageProps }: any) => {
  const { darkMode } = useTheme();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
