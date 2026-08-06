import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="mhQwpxv74vTHIJsI3ECCwz0Qas0_yy-MWH-sTv48Xwo"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
