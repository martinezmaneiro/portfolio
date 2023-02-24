import { Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";



const Card = ({ title, description, imageSrc, url }) => {

  return (
    <VStack className='card' color="black" borderRadius='lg' >
      <Link className='card-link' href={url} target='_blank' >
        <Image alt={title} src={imageSrc} loading='lazy' className='projectImg'/>
        <VStack className='projectData' align="left" p="1">
          <Heading size='md' align='center'  p='1'>{title}</Heading>
          <Text color="gray" align='center'>{description}</Text>
        </VStack>
      </Link>
    </VStack>
  )
};

export default Card;
