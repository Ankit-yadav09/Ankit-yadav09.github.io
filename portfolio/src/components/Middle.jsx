import React from 'react'
import { Box, Button, extendTheme, Image, Link, Text } from '@chakra-ui/react'

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const theme = extendTheme({ breakpoints })

function Middle() {
   
  
    return (
    <Box p={20} display={{ md: 'flex' }}>
        <Box flexShrink={1}>
          <Image
            borderRadius='full'
            width={{ sm: 60, lg:80 }}
            src='https://avatars.githubusercontent.com/u/101567851?v=4'

          />
          <spacer></spacer>
        </Box>
        
        <Box backgroundColor='green.100' 
            width={{xl:"600px", lg:"500px", md:"300px", sm:"400px",base:"300px"}}
            p={3} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text fontSize={['sm', 'md', 'lg', '2xl']}
            fontWeight='bold'
            // textTransform='uppercase'
            // fontSize='lg'
            // letterSpacing='wide'
            color='teal.600'
          >
            Hello, I am
          </Text>
          <Text fontSize={['sm', 'lg', '2xl', '4xl']}
            fontWeight='bold'
            // textTransform='uppercase'
            // fontSize='2xl'
            letterSpacing='wide'
            color='teal.600'
          >
            Ankit
          </Text>
          
          <Text mt={5} color='gray.800'>
            An inspiring Full Stack Web Developer who is keen to get new experiance and ready to learn, ehnance and apply the skills.
          </Text>
          <Button mt={5} backgroundColor='blue.500'>Resume</Button>
        </Box>
      </Box>
  )
}

export default Middle