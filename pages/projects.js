import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import { WorkGridItem } from "../components/grid-item";
import spreetail from "../public/images/spreetail.png";

const Projects = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Hackathon Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="crossguard"
            title="CrossGuard"
            thumbnail={spreetail}
          >
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="scrapshot" title="ScrapShot" thumbnail={spreetail}>
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={spreetail}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Game Jam Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="weevil-warrior"
            thumbnail={spreetail}
            title="Weevil Warrior"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="get-down" thumbnail={spreetail} title="Get Down!">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="whiz-blade"
            thumbnail={spreetail}
            title="Whiz Blade"
          >
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="squatch-watch"
            thumbnail={spreetail}
            title="Squatch Watch"
          >
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from "../components/chakra";
