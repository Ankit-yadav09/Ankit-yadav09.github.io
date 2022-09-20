import React, { useRef } from 'react'
import { Box, Button, Container, extendTheme, Grid, GridItem, Heading, Image, LinkBox, Spacer, Text } from '@chakra-ui/react'
import styles from "../styles/middle.module.css"
import Navbar from './Navbar'
import ShowScrollTop from './ShowScrollTop'
import { Link } from '@chakra-ui/react'


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
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <Box ref={projects} className={styles.projects}>
          
          <Box className={styles.projectHead}>
          <Heading size="lg" margin="20px" >ASOS-Clone</Heading> 
            <hr />
            <Heading size="md" margin="20px" textAlign="left" >
              Tech-Stack :  React | React-Routing | Context-API | Chakra UI</Heading> 
              <Heading size="md" margin="20px" textAlign="left">Features :</Heading> 
              <Text fontWeight="bold" size="md" margin="20px" textAlign="left">
               <li>An individual project executed in 4 days. </li> 
               <li>User can login.</li> 
               <li>Users can see products according to the categories.</li>
              </Text>
              <Box className={styles.projectsBtn} >
              <Link textDecoration="none" href='https://ankit-yadav09.github.io/asos-clone/' isExternal>
              <Button className={styles.projectsBtnDemo}>Live</Button>
              </Link>

              <Link textDecoration="none" href='https://github.com/Ankit-yadav09/asos-clone' isExternal>
              <Button>View Code</Button>
              </Link>
              </Box>
              
            </Box>
            <Box className={styles.projectImg}>
             <Image
              width={{ sm: 60, lg:1000 }}
              height={{ sm: 60, lg:400 }}
              marginTop="10"
              marginBottom="10"
              src={process.env.PUBLIC_URL+"/asospic.png"}
            />
            </Box>
        </Box>

        <br />
        <br />

        <Box className={styles.projects}>
          
          <Box className={styles.projectHead}>
          <Heading size="lg" margin="20px" >Banggood-Clone</Heading> 
            <hr />
            <Heading size="md" margin="20px" textAlign="left" >
              Tech-Stack :  JavaScript | HTML | CSS </Heading> 
              <Heading size="md" margin="20px" textAlign="left">Features :</Heading> 
              <Text fontWeight="bold" size="md" margin="20px" textAlign="left">
               <li>One-week project in collaboration with 5 other web developers. </li> 
               <li>User can login and signup.</li> 
               <li>Users can see products according to the categories.</li>
               <li>Users can add items to cart</li>
               <li>Users can make payment</li>
              </Text>
              <Box className={styles.projectsBtn} >
              <Link textDecoration="none" href='https://ankit-yadav09.github.io/Banggood.in-clone/' isExternal>
              <Button className={styles.projectsBtnDemo}>Live</Button>
              </Link>

              <Link textDecoration="none" href='https://github.com/Ankit-yadav09/Banggood.in-clone' isExternal>
              <Button>View Code</Button>
              </Link>
              </Box>
              
            </Box>
            <Box className={styles.projectImg}>
             <Image
              width={{ sm: 60, lg:1000 }}
              height={{ sm: 60, lg:400 }}
              marginTop="10"
              marginBottom="10"
              src={process.env.PUBLIC_URL+"/banggoodpic.png"}
            />
            </Box>
        </Box>

        <br />
        <br />

        <Box className={styles.projects}>
          
          <Box className={styles.projectHead}>
          <Heading size="lg" margin="20px" >Kindmeal.my-Clone</Heading> 
            <hr />
            <Heading size="md" margin="20px" textAlign="left" >
              Tech-Stack :  React | React-Routing | JavaScript | Context-API | Chakra UI </Heading> 
              <Heading size="md" margin="20px" textAlign="left">Features :</Heading> 
              <Text fontWeight="bold" size="md" margin="20px" textAlign="left">
               <li>Users can see delicious dishes and find restaurants.</li>
               <li>An individual project executed in 4 days. </li> 
               <li>User can login / logout.</li> 
               
              </Text>
              <Box className={styles.projectsBtn} >
              <Link textDecoration="none" href='https://ankit-yadav09.github.io/Kindmeal.my-Clone/' isExternal>
              <Button className={styles.projectsBtnDemo}>Live</Button>
              </Link>

              <Link textDecoration="none" href='https://github.com/Ankit-yadav09/Kindmeal.my-Clone' isExternal>
              <Button>View Code</Button>
              </Link>
              </Box>
              
            </Box>
            <Box className={styles.projectImg}>
             <Image
              width={{ sm: 60, lg:1000 }}
              height={{ sm: 60, lg:400 }}
              marginTop="10"
              marginBottom="10"
              src={process.env.PUBLIC_URL+"/kindmealpic.png"}
            />
            </Box>
        </Box>

        <br />
        <br />
        <Box ref={contact} className={styles.contact}>
        <Link  href='https://github.com/Ankit-yadav09' isExternal>
          <Heading size="sm" >Github</Heading>
        </Link>
          <Heading size="sm" >
            Email: <a>yadavankit46565@gmail.com</a> 
          </Heading>
          <Heading size="sm" >
            Contact No: +91 8307740489
          </Heading>
        </Box>
      </Box>
  )
}

export default Middle