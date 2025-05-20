import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="3xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
      />
      <Heading size="sm" mt={4} mb={6}>
        {greeting}
      </Heading>
      <Heading size="2xl">
        {bio1}
      </Heading>
      <Heading size="2xl">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
