import Section from "../components/section";
import { Container } from "@chakra-ui/react";

const Music = () => {
  return (
    <Section>
      <Container>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/6MGns7jK5xnu2PzRoyVzvR?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </Container>
    </Section>
  );
};

export default Music;
