import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  useMediaQuery
} from "@chakra-ui/react";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import {
  IoAnalyticsSharp,
  IoCloudUploadSharp,
  IoCodeWorking,
  IoGitPullRequest,
  IoSearchSharp
} from "react-icons/io5";
import { ReactElement } from "react";
import BlogRight from "@/components/blog/blogRight";
import BlogLeft from "@/components/blog/blogLeft";
import Angle from "@/components/blog/angle";
import Stats from "@/components/dividers/stats";
import Layout from "@/components/layout";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Layout>
        <NextSeo
          title="Oscar freelance Software Engineer"
          description="Best Software Engineer. Freelance Software Engineer. Software Developer"
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://oscarcomputerguy.com/services",
            siteName: "Oscar Software Engineer services"
          }}
        />

        <SocialProfileJsonLd
          type="Person"
          name="Oscar Guerrero"
          url="https://oscarcomputerguy.com/services"
          sameAs={[
            "https://www.facebook.com/oscar.lopez.33331508",
            "https://www.linkedin.com/in/oscar-guerrero-a59289153/"
          ]}
        />

        <Container maxW={"5xl"} py={{ base: 2, md: 16 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"white"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.500", "blue.600")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Services
              </Text>
              <Heading>Consulting Services for Your Technical Needs</Heading>
              <Text
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"lg"}
              >
                I offer expert services in scalable microservices
                infrastructure, cloud-based solutions, full-stack development,
                and technical consultation to help businesses achieve their
                goals.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoAnalyticsSharp}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Microservices Architecture Design"}
                />
                <Feature
                  icon={
                    <Icon
                      as={IoCloudUploadSharp}
                      color={"green.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Cloud-Based Infrastructure"}
                />
                <Feature
                  icon={
                    <Icon
                      as={IoGitPullRequest}
                      color={"purple.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Full-Stack Development"}
                />
                <Feature
                  icon={
                    <Icon as={IoCodeWorking} color={"purple.900"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("orange.300", "orange.600")}
                  text={"Performance Optimization"}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"gray.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("blue.100", "blue.900")}
                  text={"Technical Consultation"}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={"/services1.jpeg"}
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
        </Container>
        <BlogRight
          title="Microservices Architecture Design"
          tags={["Microservices", "Scalable"]}
          blogTitle="Expert Services for Scalable Microservices Infrastructure"
          desc="Design and implement a scalable microservices architecture that meets your business needs. I offer end-to-end services to optimize your system's performance, reliability, and scalability."
          pic="/arch_design.webp"
        />

        <Stats
          mainTitle="why should you take the microservice approach?"
          stats={[
            {
              title: "Scalability",
              stat: "scale specific services independently of each other."
            },
            {
              title: "Agility",
              stat: "adapt to changing needs and markets more quickly and easily."
            },
            {
              title: "Resilience",
              stat: " if one service fails, it does not affect the entire application."
            }
          ]}
        />
        {isLargerThan1280 && (
          <BlogLeft
            title="Cloud-Based Infrastructure"
            tags={["Cloud", "Infrastructure"]}
            blogTitle="Building Cloud-Based Solutions for Your Business Needs"
            desc="Leverage my experience in building cloud-based solutions to achieve scalability, reliability, and cost-efficiency for your business. I offer end-to-end services from migration to deployment on AWS or other cloud platforms."
            pic="/cloud_infra.jpeg"
          />
        )}

        {!isLargerThan1280 && (
          <BlogRight
            title="Cloud-Based Infrastructure"
            tags={["Cloud", "Infrastructure"]}
            blogTitle="Building Cloud-Based Solutions for Your Business Needs"
            desc="Leverage my experience in building cloud-based solutions to achieve scalability, reliability, and cost-efficiency for your business. I offer end-to-end services from migration to deployment on AWS or other cloud platforms."
            pic="/cloud_infra.jpeg"
          />
        )}

        <Stats
          mainTitle="Advantages of cloud based infrastructure"
          stats={[
            {
              title: "Scalability",
              stat: "Quickly scale resources up/down to meet changing demand."
            },
            {
              title: "Flexibility",
              stat: "Easily adapt to changing needs and requirements."
            },
            {
              title: "Cost-efficiency",
              stat: " Pay only for what you need and optimize costs."
            }
          ]}
        />
        <BlogRight
          title="Full-Stack Development"
          tags={["Full-Stack", "Development"]}
          blogTitle="Full-Stack Development Solutions for Your Digital Strategy"
          desc="I offer full-stack development services to build robust, scalable, and user-friendly applications that meet your business needs. From front-end design to back-end development, I ensure seamless integration and optimal performance."
          pic="/full-stack.avif"
        />

        {isLargerThan1280 && (
          <BlogLeft
            title="Performance Optimization"
            tags={["Performance", "Optimization"]}
            blogTitle="Performance Optimization for Maximum Efficiency"
            desc="Optimize your system's performance, reduce latency, and improve response times with my performance optimization services. I leverage my expertise in microservices architecture and cloud infrastructure to deliver efficient and effective solutions."
            pic="/performance.png"
          />
        )}

        {!isLargerThan1280 && (
          <BlogRight
            title="Performance Optimization"
            tags={["Performance", "Optimization"]}
            blogTitle="Performance Optimization for Maximum Efficiency"
            desc="Optimize your system's performance, reduce latency, and improve response times with my performance optimization services. I leverage my expertise in microservices architecture and cloud infrastructure to deliver efficient and effective solutions."
            pic="/performance.png"
          />
        )}

        <Angle />
        <BlogRight
          title="Technical Consultation"
          tags={["Consultation"]}
          blogTitle="Consulting Services for Your Technical Needs"
          desc="Leverage my broad experience as a software engineer to gain insights and advice on architecture design, software development methodologies, and best practices. I provide technical consultation services to help you achieve your goals."
          pic="/tech_consultation.jpeg"
        />
        <Stats
          mainTitle="How I normally work"
          stats={[
            {
              title: "Initial Assessment",
              stat: "Identify areas where technical consultation is needed."
            },
            {
              title: "Customized Solutions",
              stat: "Tailor technical solutions to client's specific needs."
            },
            {
              title: "Ongoing Support",
              stat: "Provide ongoing technical support and consultation."
            }
          ]}
        />
      </Layout>
    </>
  );
}
