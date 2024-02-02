import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Link from "next/link";
import { DiscordLogo } from "../trial/discord";

export const Hero = () => {
  return (
    <>
      <section id="about">
        <Flex
          css={{
            gap: "$15",
            px: "$6",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "justify",
            alignItems: "center",
            width: "100%",
            "@sm": {
              flexDirection: "row",
              mt: "$20",
            },
          }}
          justify={"center"}
        >
          <Box
            css={{
              pt: "$13",

              display: "flex",
              flexDirection: "column",
              gap: "$5",
            }}
          >
            <Box
              css={{
                maxWidth: "600px",
              }}
            >
              <Text
                h1
                css={{
                  display: "inline",
                }}
                color="primary"
              >
                VSkill
              </Text>
            </Box>

            <Text
              css={{
                color: "$accents8",
                maxWidth: "450px",
              }}
              size={"$md"}
              span
            >
              <b>V-Skill</b> is our commitment to <b>VITAP's</b> future
              innovators. As seniors, we aim to forge a transformative system
              where our juniors can{" "}
              <b>fearlessly learn, collaborate, and innovate</b>. Through
              mentorship, resilience, and strategic partnerships,
              <b> V-Skill </b>envisions shaping a legacy of skilled changemakers
              within the<b> VITAP community</b>, fostering a{" "}
              <b>
                culture of continuous learning and impactful innovation for
                years to come
              </b>
              .
            </Text>

            <Flex
              css={{
                gap: "$8",
                pt: "$4",
              }}
              wrap={"wrap"}
            >
              <Link href="https://forms.gle/n82rYbAd4Ee1Fu8T6" target="_blank">
                <Button>Register Now</Button>
              </Link>
            </Flex>
            <Flex
              css={{
                gap: "$8",
                pt: "$4",
              }}
              wrap={"wrap"}
            >
             <Link href='https://discord.gg/jYvGg4VSGV' target='_blank'>

<Button  flat href="#">
<DiscordLogo />
            &nbsp; Discord
</Button>
</Link>
            </Flex>
          </Box>
          <Box
            css={{
              "& img": {
                width: "600px",
                objectFit: "contain",
              },
            }}
          >
            <img src="hero.png" />
          </Box>
        </Flex>
        <Divider
          css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
        />
      </section>
    </>
  );
};
