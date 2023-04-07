import Layout from "@/components/layout";
import Home from "@/components/home";
import CustomHeader from "@/components/head/customHeader";

const intro = () => {
  return (
    <Layout>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer"
        url="https://oscarcomputerguy.com/intro"
        siteName="Oscar Software Engineer intro"
      />
      <Home />
    </Layout>
  );
};

export default intro;
