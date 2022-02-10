import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 25px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding-bottom: 10px;
  img {
    transform: rotate(0deg);
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(15deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/music-note${useColorModeValue(
    "-dark",
    ""
  )}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
            ml={1}
          >
            Erik Skoog
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
