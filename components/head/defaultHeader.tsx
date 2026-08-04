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
            url: "https://oscarcomputerguy.com/photo.jpeg",
            width: 375,
            height: 375,
            alt: "Oscar Guerrero - Senior Software Engineer",
            type: "image/jpeg"
          }
        ]
      }}
      canonical={url}
    />
  );
};

export default defaultHeader;
