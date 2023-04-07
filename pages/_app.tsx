import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import DefaultHeader from "@/components/head/defaultHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultHeader
        title="Software Engineer"
        description="Best Software Engineer"
        url="https://www.oscarcomputerguy.com/"
        siteName="Oscar Software Engineer"
      />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
