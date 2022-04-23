import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../themes";
import { UIProvided } from "../context/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvided>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvided>
  );
}

export default MyApp;
