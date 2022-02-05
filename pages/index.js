import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";

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
          <p>Software Engineer | Musician</p>
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
            maxWidth="125px"
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
      </Section>

      <Section>
        <Heading as="h2" variant="section-title">
          Education / Work History
        </Heading>
      </Section>

      <Section>
        <Heading as="h2" variant="section-title">
          Things I Enjoy
        </Heading>
      </Section>

      <Section>
        <Heading as="h2" variant="section-title">
          On The Web
        </Heading>
      </Section>
    </Container>
  );
};

export default Page;
