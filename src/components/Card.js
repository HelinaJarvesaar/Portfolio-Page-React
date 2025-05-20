import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      spacing={0}
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      boxShadow="md"
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        aspectRatio="16/12"
      />
      <VStack spacing={2} px={4} py={4} align="start" width="100%">
        <Heading size="md"  color="black">{title || "title not provided"}</Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <HStack spacing={1} pt={2} fontWeight="medium" color="black">
          <Text fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
