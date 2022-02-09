import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import { WorkGridItem } from "../components/grid-item";
import crossGuard from "../public/images/crossGuard.png";
import scrapshot from "../public/images/scrapshot2.png";
import spellmate from "../public/images/spellmate.jpg";
import getDown from "../public/images/getdown.gif";
import weevilWarrior from "../public/images/weevil.gif";
import whizblade from "../public/images/whizblade-title.gif";
import squatch from "../public/images/squatch-title.gif";

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Game Jam Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="weevil-warrior"
              thumbnail={weevilWarrior}
              title="Weevil Warrior"
              link="https://picross.itch.io/weevil-warrior"
            >
              Escape the grain silo in this fast-paced Game Boy platformer, made
              in ZGB!
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="get-down"
              thumbnail={getDown}
              title="Get Down!"
              link="https://camdeno.itch.io/get-down"
            >
              Exterminate the boogie monsters and go deeper into the disco
              dungeon!
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="whiz-blade"
              thumbnail={whizblade}
              title="Whiz Blade"
              placeholder="blur"
              link="https://camdeno.itch.io/whiz-blade"
            >
              A top-down browser puzzle game with an out-of-control demon sword!
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="squatch-watch"
              thumbnail={squatch}
              title="Squatch Watch"
              placeholder="blur"
              link="https://grantimation.itch.io/squatch-watch"
            >
              A game about keeping the legend of bigfoot alive.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider my={6} />
      </Section>

      <Section delay={1.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          Hackathon Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="crossguard"
              title="CrossGuard"
              thumbnail={crossGuard}
              link="https://devpost.com/software/crossguard"
            >
              A cross-platform mobile application that aids blind individuals
              with navigating busy streets on foot.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="scrapshot"
              title="ScrapShot"
              thumbnail={scrapshot}
              link="https://devpost.com/software/scrapshot"
            >
              A mobile application used to determine whether an item is
              recyclable based on live image recognition.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="spellmate"
              title="Spell Mate"
              thumbnail={spellmate}
              link="https://devpost.com/software/cornhacks2019-t2czk6"
            >
              A program that aims to help encourage young children to practice
              their grammar abilities and make studying more fun.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from "../components/chakra";
