import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Joaquin Martinez Maneiro";
const bio1 = "Frontend Developer";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#242739"
  >
    <VStack spacing={4}>
      <Avatar name='Joaquin Martinez Maneiro' size='2xl' src='https://media.licdn.com/dms/image/C4D03AQG24bbuq74ngQ/profile-displayphoto-shrink_800_800/0/1661521752175?e=1681948800&v=beta&t=VZpMMGMr8m1r4yRo28llbqwbniZ4ea2fjLP-5Kerm3A' />
      <Heading size="lg">{greeting}</Heading>
      <Heading mt="40px !important">{bio1}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
