import React, { useState } from "react";
import styled from "@emotion/styled";
import Section from "../components/section";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Card = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;

  }
`;

const CardBody = styled.div`
  display: flex;
`;

const CardTimeline = styled(Section)`
  display: flex;
  margin: 150px auto;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: relative;
  align: center;

  :nth-child() {
    paddding-bottom: 10px;
  }
`;

const Timeline = () => {
  const [isHidden, setIsHidden] = useState(true);

  function showRest() {
    setIsHidden(false);
  }

  return (
    <CardTimeline>
      <Card
        style={{
          backgroundColor: useColorModeValue("#f5f0e8", "#313134"),
        }}
      >
        <CardBody>
          <Box flexGrow={1}>
            <Heading as="h2" size="lg">
              University of Nebraska-Lincoln
            </Heading>
            <p>Projected Graduation (2018-2022)</p>
            <br />
            <p>- Bachelor of Computer Science, Focus in Software Engineering</p>
            <p>- Minors: Mathematics, Music Technology</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              marginLeft="10px"
              borderColor="whiteAlpha800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/unl-logo-square.jpg"
              alt="Profile Image"
            />
          </Box>
        </CardBody>
      </Card>
      <Card
        style={{
          backgroundColor: useColorModeValue("#f5f0e8", "#313134"),
        }}
      >
        <CardBody>
          <Box flexGrow={1}>
            <Heading as="h2" size="lg">
              UNL Raikes Design Studio
            </Heading>
            <p>Development Manager (2021-2022)</p>
            <br />
            <p>- .NET, Neo4j</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/raikes-square.png"
              alt="raikes"
            />
          </Box>
        </CardBody>
      </Card>
      <Card
        style={{
          backgroundColor: useColorModeValue("#f5f0e8", "#313134"),
        }}
      >
        <CardBody>
          <Box flexGrow={1}>
            <Heading as="h2" size="lg">
              Medical Solutions
            </Heading>
            <p>Software Development Intern (2021-present)</p>
            <br />
            <p>- React, Typescript, Node</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/medsol.png"
              alt="medical solutions"
            />
          </Box>
        </CardBody>
      </Card>
      {isHidden ? (
        <Box align="center">
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            onClick={showRest}
          >
            Show More
          </Button>
        </Box>
      ) : (
        <Section>
          <Card
            style={{
              backgroundColor: useColorModeValue("#f5f0e8", "#313134"),
            }}
          >
            <CardBody>
              <Box flexGrow={1}>
                <Heading as="h2" size="lg">
                  UNL Senior Design
                </Heading>
                <p>Development Manager (2020-2021)</p>
                <br />
                <p>- React Native, CSS, Node</p>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
              >
                <Image
                  borderColor="whiteAlpha800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/unl-logo-square.jpg"
                  alt="unl"
                />
              </Box>
            </CardBody>
          </Card>
          <Card
            style={{
              backgroundColor: useColorModeValue("#f5f0e8", "#313134"),
            }}
          >
            <CardBody>
              <Box flexGrow={1}>
                <Heading as="h2" size="lg">
                  Spreetail
                </Heading>
                <p>Software Engineering Intern (2020)</p>
                <br />
                <p>- React, C#, Node</p>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
              >
                <Image
                  borderColor="whiteAlpha800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/spreetail.png"
                  alt="spreetail"
                />
              </Box>
            </CardBody>
          </Card>
        </Section>
      )}
    </CardTimeline>
  );
};

export default Timeline;
