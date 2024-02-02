import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import { DiscordLogo } from '../trial/discord';
// import {VskillLogo} from '../../public/VSKILL_Logo.webp';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isLight, type} = useTheme();
   const collapseItems = [
      'About',
      'Problem Statement',
      'FAQ\'s',
      'Contact Us',
      
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link  href="#about" >
                  About
               </Navbar.Link>
               <Navbar.Link  href="#">
                  Problem Statement
               </Navbar.Link>
               <Navbar.Link  href="#Timeline" style={{scrollBehavior:'smooth'}} >
                  Timeline
               </Navbar.Link>
               <Navbar.Link href="#FAQs" style={{scrollBehavior:'smooth'}} >FAQ's</Navbar.Link>
               <Navbar.Link href="#contact">Contact Us</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://discord.gg/jYvGg4VSGV"
               >
                  <DiscordLogo />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isLight}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            {/* <ModalLogin /> */}

            <Navbar.Item>
               <Link href='https://forms.gle/n82rYbAd4Ee1Fu8T6' target='_blank'>

               <Button auto flat href="#">
                  Register Now
               </Button>
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://discord.gg/jYvGg4VSGV"
               >
                  <DiscordLogo />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isLight}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
