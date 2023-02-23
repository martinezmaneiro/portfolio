import React, { useState, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: joaquinmar08@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/martinezmaneiro",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/joaquinmar08/",
  },

];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [y, setY] = useState(window.scrollY);
  const scroll = useRef("scrolling up");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        scroll.current = "scrolling up"
      } else if (y < window.scrollY) {
        scroll.current = "scrolling down"
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={scroll.current === "scrolling up" ? "translateY(0)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, i) => <a key={i} href={social.url} target="_blank" style={{marginRight: "20px"}}><FontAwesomeIcon icon={social.icon} size="2x" /></a>)}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contactme" onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
