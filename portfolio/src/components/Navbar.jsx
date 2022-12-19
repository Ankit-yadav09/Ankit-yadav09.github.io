import { Box, color, Flex, Heading, IconButton, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import React, { useRef } from 'react'
import {FaSun,FaMoon} from 'react-icons/fa'
import styles from "./port.module.css"
import { Button, extendTheme, Image, Link } from '@chakra-ui/react'

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const theme = extendTheme({ breakpoints })

function Navbar ({scrollToPart, home, about, skills, projects, contact}) {

const {colorMode, toggleColorMode} =useColorMode();
const isDark = colorMode==="dark";

let name="/*Ankit*/"

const handleClick=()=>{
  fetch('Ankit_Resume.pdf').then(response => {
    response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Ankit_Resume.pdf';
        alink.click();
    })
})
}

  return (
    
    <Box className={styles.navBox} backgroundColor='gray.300' flexShrink={0}
    // mt={{ base: "4", md: 0 }} 
    height={{base:"70px",sm:'70px',md:"150px", large:"100px"}} p={5}
    
     display={{ md: 'flex', sm:'flex' }}>
        
        <Box flexShrink={0}>
        <Text className={styles.myName} mt={3} fontSize={22} fontStyle="italic" fontWeight="bold" cursor='pointer'>{name}</Text>
          
        </Box>
        <Spacer></Spacer>
        <Box className={styles.navbarBtns} display={{ md: 'flex', sm:'flex' , }} gap={{base:'10px',sm:"5px", md:"10px", xl:"40px"}}
        
            p={3} mt={{base:-10, sm:0, md:0 ,base: 4, md: 0 }} ml={{ md: 2 }} mr={{ md: 2, xl: 10, sm:0 }}  >
          <Text
          onClick={()=>scrollToPart(home)} 
           fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Home
          </Text>
          <Text
          onClick={()=>scrollToPart(about)} 
           fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            About
          </Text>
          <Text
          onClick={()=>scrollToPart(skills)} 
           fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Skills
          </Text>
          <Text
          onClick={()=>scrollToPart(projects)} 
           fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Projects
          </Text>
          
          <Text
          onClick={()=>scrollToPart(contact)} 
           fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Contact
          </Text>

          <Text
          onClick={()=>handleClick()} 
           fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight='semibold'
            cursor="pointer"
            color='black.600'
          >
            Resume
          </Text>
          
            
      
        </Box>
        <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound={true} onClick={toggleColorMode} ></IconButton>
      </Box>
    // <div>
  )
}

export default Navbar