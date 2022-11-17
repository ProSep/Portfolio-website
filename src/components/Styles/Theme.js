import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Global";

const theme = {
  colors: {
    primary: '#5e7ce2ff',
    accent: '#06bcc1ff',
    secondary: '#c60f7bff',
    netural: '#f7f3e3ff',
    neturalo: '#12263aff',
  },
  font: {
    title: 'sans-serif',
  },
  scale: {
    medium: 'min-width: 1500px',
    small: 'max-width: 1110px',
    xsmall: 'max-width: 1015px',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;