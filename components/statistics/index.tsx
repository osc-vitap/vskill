import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import {BoxIcon} from '../icons/BoxIcon';


export const Statistics = () => {
  return (
    <>
      <section id="Timeline">
        <Box
          css={{
            pt: "$20",
            pb: "$16",
            px: "$6",
          }}
        >
          <Flex direction={"column"} align={"center"}>
            <Text
              h2
              css={{
                textAlign: "center",
              }}
            >
              Peer Learning
            </Text>
            <Text
              span
              css={{
                maxWidth: "800px",
                textAlign: "center",
              }}
            >
             
            </Text>
          </Flex>
          <Flex
            direction={"row"}
            wrap={"wrap"}
            justify={"center"}
            css={{
              gap: "4rem",
              pt: "$16",
              "@sm": {
                gap: "10rem",
              },
            }}
          >
           <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet aliquet Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed condimentum, nisl ut aliquam
                        lacinia, nisl nisl aliquet aliquet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Sed condimentum, nisl
                        ut aliquam lacinia, nisl nisl aliquet aliquet Lorem
                        ipsum dolor sit amet, aliquam lacinia, nisl nisl aliquet
                        aliquet
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex>
            <Flex direction={"column"}>
             
              <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Discord platform for streamlined inquiries and real-time assistance

              </Text>
            </Flex>
            <Flex direction={"column"}>
              
              <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Documentation on Discord for future reference and broad knowledge dissemination

              </Text>
            </Flex>
            
          </Flex>
        </Box>

        <Divider
          css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
        />
      </section>
    </>
  );
};
