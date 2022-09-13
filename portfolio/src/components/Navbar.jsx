import { Box, Flex, Heading, IconButton, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {FaSun,FaMoon} from 'react-icons/fa'

import { Button, extendTheme, Image, Link } from '@chakra-ui/react'

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const theme = extendTheme({ breakpoints })


function Navbar () {

const {colorMode, toggleColorMode} =useColorMode();
const isDark = colorMode==="dark";
let name="<Ankit/>"
  return (
    <Box width="100%" backgroundColor='orange.400' 
    height={{base:"220px",sm:'80px'}} p={5}
     display={{ md: 'flex', sm:'flex', }}>
        <Box flexShrink={0}>
        <Text mt={3} fontSize={22} fontWeight="bold" cursor='pointer'>{name}</Text>
          
        </Box>
        <Spacer></Spacer>
        <Box display={{ md: 'flex', sm:'flex' , }} gap={{base:'10px',sm:"5px", md:"10px", xl:"20px"}}
        
            p={3} mt={{base:-10, sm:0, md:0 ,base: 4, md: 0 }} ml={{ md: 2 }} mr={{ md: 2, xl: 10, sm:0 }}  >
          <Text fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            About
          </Text>
          <Text fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Skills
          </Text>
          <Text fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Projects
          </Text>
          
            
      
        </Box>
        <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound={true} onClick={toggleColorMode} ></IconButton>
      </Box>
    // <div>
  // <Stack>
    
  // </Stack>
  )
}

export default Navbar