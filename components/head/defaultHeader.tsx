import { DefaultSeo } from "next-seo";

interface DefaultHeader {
  title: string;
  description: string;
  url: string;
  siteName: string;
}

const defaultHeader: React.FC<DefaultHeader> = ({
  title,
  description,
  url,
  siteName
}) => {
  return (
    <DefaultSeo
      title={title}
      description={description}
      additionalLinkTags={[{ rel: "icon", href: "/performance.png" }]}
      openGraph={{
        type: "website",
        locale: "en_US",
        url,
        siteName,
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
      canonical="https://oscarcomputerguy.com"
    />
  );
};

export default defaultHeader;
