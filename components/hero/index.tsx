import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
      <section id='about'>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  {/* <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     VSkill{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     for{' '}
                  </Text> */}
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     VSkill
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '450px',
                  }
               }
                  size={'$md'}
                  span
               >
                 <b>V-Skill</b>  is our commitment to <b>VITAP's</b> future innovators. As seniors, we aim to forge a transformative system where our juniors can <b>fearlessly learn, collaborate, and innovate</b>.
Through mentorship, resilience, and strategic partnerships,<b> V-Skill </b>envisions shaping a legacy of skilled changemakers within the<b> VITAP community</b>, fostering a <b>culture of continuous learning and impactful innovation for years to come</b>.

               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Button>Register Now</Button>
               </Flex>
               {/* <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> No credit card required.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> 14-day free trial.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Cancel anytime.
                  </Flex>
               </Flex> */}
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="hero.png" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
         </section>
      </>
   );
};
