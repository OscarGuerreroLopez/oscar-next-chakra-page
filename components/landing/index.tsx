import React from "react";
import {
  chakra,
  Flex,
  Button,
  Text,
  VStack,
  Stack,
  useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const MotionSpan = chakra(motion.span);

const MESSAGE_UNITS = [
  "Hello,",
  "Oscar Guerrero here.",
  "I am a senior software engineer",
  "with more than 20 years of experience",
  "in backend and cloud systems."
];

const REVEAL_STAGGER = 0.86;
const REVEAL_DURATION = 1.1;

const messageVariants = {
  hidden: { opacity: 0, x: "30%" },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * REVEAL_STAGGER,
      duration: REVEAL_DURATION,
      ease: "easeOut"
    }
  }),
  reduced: { opacity: 1, x: 0, transition: { duration: 0 } }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
};

export default function Landing() {
  const prefersReducedMotion = useReducedMotion();
  const [revealComplete, setRevealComplete] = React.useState(false);
  const isComplete = prefersReducedMotion === true || revealComplete;

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6} w={"full"}>
          <Text
            as="span"
            display="block"
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            overflow="hidden"
          >
            {MESSAGE_UNITS.map((unit, index) => (
              <MotionSpan
                key={unit}
                display="inline-block"
                mr={index === MESSAGE_UNITS.length - 1 ? 0 : 2}
                initial="hidden"
                animate={prefersReducedMotion ? "reduced" : "visible"}
                custom={index}
                variants={messageVariants}
                onAnimationComplete={
                  index === MESSAGE_UNITS.length - 1
                    ? () => setRevealComplete(true)
                    : undefined
                }
              >
                {unit}
              </MotionSpan>
            ))}
          </Text>
          {isComplete && (
            <MotionSpan
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              variants={ctaVariants}
            >
              <Button
                as={Link}
                href="/intro"
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Learn more about me
              </Button>
            </MotionSpan>
          )}
        </Stack>
      </VStack>
    </Flex>
  );
}
