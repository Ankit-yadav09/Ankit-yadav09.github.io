import React from 'react'
import { Box, Button, extendTheme, Image, Link, Spacer, Text } from '@chakra-ui/react'

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const theme = extendTheme({ breakpoints })

function Middle() {
  
  const handleClick=()=>{
    fetch('Ankit_Resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
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
    <Box p={20} display={{ md: 'flex' }}>
        <Box flexShrink={1}>
          <Image
            borderRadius='full'
            width={{ sm: 60, lg:400 }}
            src='https://avatars.githubusercontent.com/u/101567851?v=4'

          />
          <Spacer></Spacer>
        </Box>
        
        <Box backgroundColor='green.100' 
            width={{xl:"600px", lg:"500px", md:"300px", sm:"400px",base:"300px"}}
            p={3} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text fontSize={['sm', 'md', 'lg', '3xl']}
            fontWeight='bold'
            color='black.100'
            mb={5}
          >
            Hello, 
          </Text>
          <Text fontSize={['sm', 'lg', '2xl', '5xl']}
            fontWeight='bold'
            fontFamily="sans-serif"
            // textTransform='uppercase'
            // fontSize='2xl'
            letterSpacing='wide'
            color='teal.600'
            animation="ease-in"
          >
          I am Ankit
          </Text>
          
          <Text animation="backwards" p={5} fontSize={20} mt={0} color='gray.800'>
            An inspiring Full Stack Web Developer who is keen to get new experiance and ready to learn, ehnance and apply the skills.
          </Text>
          
          <Button onClick={handleClick} mt={35} color="white" backgroundColor='blue.500'>Resume</Button>

        </Box>
      </Box>
  )
}

export default Middle