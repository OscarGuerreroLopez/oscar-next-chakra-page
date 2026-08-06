import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import DefaultHeader from "@/components/head/defaultHeader";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultHeader
        title="Senior Software Engineer | Node.js, AWS, AI Backend"
        description="Oscar Guerrero is a senior software engineer helping teams build scalable backend systems with Node.js, TypeScript, Python, AWS, and AI workflows."
        url="https://oscarcomputerguy.com/"
        siteName="Oscar Guerrero"
      />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
