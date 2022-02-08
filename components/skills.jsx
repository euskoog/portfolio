import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Box,
  Heading,
  Image,
  Container,
  Button,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

const SkillsCard = styled(Box)``;

const SkillLevelContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const SkillName = styled(Heading)`
  margin: 0px 0px 10px 0px;
`;

const SkillImage = styled(Image)`
  display: block;
  margin-top: 10px;
  height: 130px;
`;

const Skills = () => {
  const [reactPercentage, setReactPercentage] = useState(0);
  const [TSPercentage, setTSPercentage] = useState(0);
  const [CSPercentage, setCSPercentage] = useState(0);
  const [pythonPercentage, setPythonPercentage] = useState(0);

  setTimeout(() => {
    setReactPercentage(80);
    setTSPercentage(75);
    setCSPercentage(55);
    setPythonPercentage(50);
  }, 0);

  return (
    <Container>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <SkillsCard align="center">
          <SkillImage src="/images/react-grey.png" />
          <SkillName align="center" size="lg">
            React
          </SkillName>
          <SkillLevelContainer>
            <CircularProgressbar
              value={reactPercentage}
              text={`${reactPercentage}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,

                transition: "stroke-dashoffset 0.5s ease 1s",
                // Rotate the path
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",

                // Colors
                pathColor: "#319795",
                textColor: useColorModeValue("#525252", "white"),
                trailColor: useColorModeValue("#d6d6d6", "#313134"),
                backgroundColor: "#ffcf3f",
              })}
            />
          </SkillLevelContainer>
        </SkillsCard>
        <SkillsCard align="center">
          <SkillImage src="/images/typescript-grey.png" />
          <SkillName align="center" size="lg">
            TypeScript
          </SkillName>
          <SkillLevelContainer>
            <CircularProgressbar
              value={TSPercentage}
              text={`${TSPercentage}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,

                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",

                // Colors
                pathColor: "#319795",
                textColor: useColorModeValue("#525252", "white"),
                trailColor: useColorModeValue("#d6d6d6", "#313134"),
                backgroundColor: "#ffcf3f",
              })}
            />
          </SkillLevelContainer>
        </SkillsCard>
        <SkillsCard align="center">
          <SkillImage src="/images/csharp-grey.png" />
          <SkillName align="center" size="lg">
            C#
          </SkillName>
          <SkillLevelContainer>
            <CircularProgressbar
              value={CSPercentage}
              text={`${CSPercentage}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,

                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",

                // Colors
                pathColor: "#319795",
                textColor: useColorModeValue("#525252", "white"),
                trailColor: useColorModeValue("#d6d6d6", "#313134"),
                backgroundColor: "#ffcf3f",
              })}
            />
          </SkillLevelContainer>
        </SkillsCard>
        <SkillsCard align="center">
          <SkillImage src="/images/python-grey.png" />
          <SkillName align="center" size="lg">
            Python
          </SkillName>
          <SkillLevelContainer>
            <CircularProgressbar
              value={pythonPercentage}
              text={`${pythonPercentage}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,

                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",

                // Colors
                pathColor: "#319795",
                textColor: useColorModeValue("#525252", "white"),
                trailColor: useColorModeValue("#d6d6d6", "#313134"),
                backgroundColor: "#ffcf3f",
              })}
            />
          </SkillLevelContainer>
        </SkillsCard>
      </SimpleGrid>
    </Container>
  );
};

export default Skills;
