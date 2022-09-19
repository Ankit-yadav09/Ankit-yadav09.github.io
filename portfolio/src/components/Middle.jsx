import React, { useRef } from 'react'
import { Box, Button, Container, extendTheme, Grid, GridItem, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import styles from "../styles/middle.module.css"
import Navbar from './Navbar'
import ShowScrollTop from './ShowScrollTop'

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const theme = extendTheme({ breakpoints })

function Middle() {

  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToPart = (elRef)=>{
      window.scrollTo({
        top: elRef.current.offsetTop,
        behavior: "smooth"
      })
  }

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
      <Box>
        <Navbar
        about={about} 
        skills={skills} projects={projects}
        contact={contact} 
        scrollToPart={scrollToPart} 
        />
        
        <ShowScrollTop />
        <br />
        <Box p={20} display={{ md: 'flex' }}>
          
          <Box backgroundColor='white.100' 
              width={{xl:"600px", lg:"500px", md:"300px", sm:"400px",base:"300px"}}
              p={3} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text fontSize={['sm', 'md', 'lg', '3xl']}
              fontWeight='bold'
              color='black.100'
              mb={5}
            >
              Hii, 
            </Text>
            
            <Text fontSize={['sm', 'lg', '2xl', '4xl']}
              fontWeight='bold'
              fontFamily="sans-serif"
              letterSpacing='wide'
              color='Gray.400'
              animation="ease-in"
            >
            Welcome to my Portfolio
            </Text>
            
          </Box>
          <Image
              borderRadius='full'
              width={{ sm: 60, lg:400 }}
              src={process.env.PUBLIC_URL+"/port.jpg"}

            />
        </Box>
          <br />
          <br />
        <Box ref={about} className={styles.about}>
          {/* About */}
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
        </Box>
        <br />
   
        <Box ref={skills} className={styles.skills}>
          <Heading size="xl" textAlign="start">SKILLS</Heading>
          <br />
          <br />
          <Heading >Front-End</Heading>
          <br />
          <Grid templateColumns='repeat(6, 1fr)' gap={6} className={styles.skillsGrid}>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >HTML</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >CSS</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >JAVASCRIPT</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >REACT</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >REDUX</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >CHAKRA UI</Heading> </GridItem>
            
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          
          <Heading>Back-End and Database</Heading>
          <br />
          <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.skillsGrid}>
          <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >NODE</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >EXPRESS</Heading> </GridItem>
            <GridItem w='100%' h='20' bg='gray.300' >
             <Heading size="md" margin="20px" >MONGODB</Heading> </GridItem>
            
          </Grid>
        </Box>
        
        <Box ref={projects} className={styles.projects}>
          Projects
        </Box>

        <Box ref={contact} className={styles.contact}>
          contact
        </Box>
      </Box>
  )
}

export default Middle