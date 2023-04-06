import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo
        title="Software Engineer"
        description="Best Software Engineer"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.oscarcomputerguy.com/",
          siteName: "Oscar Software Engineer",
          images: [
            {
              url: "/photo.jpeg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg"
            }
          ]
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1
        }}
        dangerouslySetAllPagesToNoFollow
        dangerouslySetAllPagesToNoIndex
        canonical="https://oscarcomputerguy.com"
      />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
