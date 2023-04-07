import { NextSeo, SocialProfileJsonLd, CorporateContactJsonLd } from "next-seo";

interface CustomHeader {
  title: string;
  description: string;
  url: string;
  siteName: string;
}

const customHeader: React.FC<CustomHeader> = ({
  title,
  description,
  url,
  siteName
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          locale: "en_US",
          url,
          siteName
        }}
        canonical="https://oscarcomputerguy.com/about/expertise"
      />

      <SocialProfileJsonLd
        type="Person"
        name="Oscar Guerrero"
        url={url}
        sameAs={[
          "https://www.facebook.com/oscar.lopez.33331508",
          "https://www.linkedin.com/in/oscar-guerrero-a59289153/"
        ]}
      />

      <CorporateContactJsonLd
        url={url}
        contactPoint={[
          {
            telephone: "+34-622-450-008",
            contactType: "Freelance Software Engineer",
            email: "oscar.computer.guy@gmail.com",
            areaServed: "EU",
            availableLanguage: ["English", "Spanish"]
          }
        ]}
      />
    </>
  );
};

export default customHeader;
