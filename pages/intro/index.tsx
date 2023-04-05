import Layout from "@/components/layout";
import { ArticleJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";
import Home from "@/components/home";

const intro = () => {
  return (
    <Layout>
      <NextSeo
        title="Oscar Software Engineer"
        description="Best Software Engineer"
        canonical="https://oscarcomputerguy.com/intro"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://oscarcomputerguy.com/intro",
          siteName: "Oscar Software Engineer intro"
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://oscarcomputerguy.com/intro"
        title="Oscar Guerrero Software Engineer"
        images={["/code4.jpeg", "/analytics.png", "/cloud.jpeg"]}
        datePublished="2023-04-05T23:04:13Z"
        dateModified="2023-04-05T23:04:13Z"
        authorName="Oscar Guerrero"
        description="Oscar Guerrero Software Engineer intro page"
      />

      <SocialProfileJsonLd
        type="Person"
        name="Oscar Guerrero"
        url="https://oscarcomputerguy.com/intro"
        sameAs={[
          "https://www.facebook.com/oscar.lopez.33331508",
          "https://www.linkedin.com/in/oscar-guerrero-a59289153/"
        ]}
      />
      <Home />
    </Layout>
  );
};

export default intro;
