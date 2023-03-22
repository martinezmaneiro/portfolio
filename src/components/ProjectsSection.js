import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Javascript Calculator",
    description:
      "Basic JS calculator made with React.js",
    url: 'https://martinezmaneiro.github.io/js-calculator/',
    getImageSrc: () => require("../images/calculator.png"),
  },
  {
    title: "Drums Machine",
    description:
      "Drums machine designed with React and Bootstrap",
    url: 'https://martinezmaneiro.github.io/drums-machine/',
    getImageSrc: () => require("../images/drums.png"),
  },
  {
    title: "Whatsapp clone",
    description:
      "Whatsapp clone app using React, Bootstrap and Tailwind.",
    url: 'https://martinezmaneiro.github.io/whatsapp-clone/',
    getImageSrc: () => require("../images/wpp-clone.png"),
  },
  {
    title: "Random Quotes",
    description:
      "Random quotes app with tweet link functionality designed with React and Bootstrap",
    url: 'hhttps://martinezmaneiro.github.io/random-quotes-machine/',
    getImageSrc: () => require("../images/quotes.png"),
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      className='featured-projects'
      backgroundColor="#5e8271"
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={50}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        className='card-container'
        display="grid"
        gridTemplateColumns= '1fr 1fr'
        gridGap={20}

      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;