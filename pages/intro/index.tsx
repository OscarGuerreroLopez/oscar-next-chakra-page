import Layout from "@/components/layout";
import Home from "@/components/home";
import CustomHeader from "@/components/head/customHeader";

const intro = () => {
  return (
    <Layout>
      <CustomHeader
        title="Senior Software Engineer Intro | Node.js, AWS, AI Backend"
        description="Meet Oscar Guerrero, a senior software engineer focused on scalable backend architecture, cloud systems on AWS, and practical AI backend engineering."
        url="https://oscarcomputerguy.com/intro"
        siteName="Oscar Guerrero Intro"
      />
      <Home />
    </Layout>
  );
};

export default intro;
