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
      <Avatar name='Joaquin Martinez Maneiro' size='2xl' src='https://media.licdn.com/dms/image/D4D03AQHFmrfl1q9y_A/profile-displayphoto-shrink_200_200/0/1680025715076?e=1685577600&v=beta&t=UD9BpWFmIA3qVji63zDCK5RQkzunBSfshuvPYiBjtCM' />
      <Heading size="lg">{greeting}</Heading>
      <Heading mt="40px !important">{bio1}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
