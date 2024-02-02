import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { DiscordLogo } from "./discord";
import Link from "next/link";

export const Trial = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h2>Help Center</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          Join our Discord Server and if you face any issue, post your query
          over there.
        </Text>
        <Link href="https://discord.gg/jYvGg4VSGV" target="_blank">
          <Button>
            <DiscordLogo />
            &nbsp; Discord
          </Button>
        </Link>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
