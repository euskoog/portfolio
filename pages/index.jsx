import {
  List,
  ListItem,
  Link,
  Button,
  Icon,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Timeline from "../components/timeline";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLocationSharp,
} from "react-icons/io5";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hi, I&apos;m a Software Engineer from Lincoln, Nebraska!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h1" varaint="page-title">
            Erik Skoog
          </Heading>
          <p>Software Engineer</p>
          <br />
          <p>{<Icon as={IoLocationSharp} />} Lincoln, NE</p>
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
            maxWidth="150px"
            display="inline-block"
            borderRadius="full"
            src="/images/headshot.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section>
        <Heading as="h2" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          <i>"I type a lot and build cool things."</i>
        </Paragraph>
        <br />
        <Paragraph>
          At his core, Erik is a creative and outgoing individual, motivated
          towards learning new programming techniques and practices. To Erik,
          software engineering is more than just a job, it's an opportunity to
          create. Developing meaningful projects and helping people solve
          problems is Erik's highest priority.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h2" variant="section-title">
          Education / Work History
        </Heading>
        <br />
        <Timeline />
      </Section>

      <Section>
        <Heading as="h2" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Art, Drums, Sports, Climbing, Music Composition, Mechanical Keyboards
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h2" variant="section-title">
          On The Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/euskoog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @euskoog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/euskoog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @euskoog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/erikuskoog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @erikuskoog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/erik-skoog-744b46187/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Erik Skoog
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Page;
