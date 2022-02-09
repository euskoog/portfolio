import React, { useState } from "react";
import Section from "../components/section";
import {
  Container,
  Heading,
  Box,
  Spinner,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { MusicGridItem } from "../components/grid-item";
import noah from "../public/images/noah.jpeg";
import little from "../public/images/little.jpeg";
import NextLink from "next/link";

const Music = () => {
  return (
    <Section>
      <Container>
        <Heading marginTop="20px">My Top Music</Heading>
        <Box margin="10px">
          <Section>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/6MGns7jK5xnu2PzRoyVzvR?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </Section>
        </Box>
      </Container>
      <Container>
        <Heading marginBottom="10px">Notable Collaborations</Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <MusicGridItem
              id="noah"
              thumbnail={noah}
              title="Noah Floersch"
              link="https://open.spotify.com/artist/6fU24B4K9kWmFt5WTwwsLF?si=Sto4eNL-Rk2zfAtyQySCZA"
            >
              110,000+ monthly listeners
            </MusicGridItem>
          </Section>
          <Section delay={0.3}>
            <MusicGridItem
              id="little"
              thumbnail={little}
              title="Little Green"
              link="https://open.spotify.com/artist/0Kcz7AMOkHHye7xhLJUWTy?si=1L6jofp8RvGN98IiK1WzrA"
            >
              130,000+ monthly listeners
            </MusicGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Section>
  );
};

export default Music;
