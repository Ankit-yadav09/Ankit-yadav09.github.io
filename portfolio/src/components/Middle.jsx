import React, { useRef } from 'react'
import { Box, Button, Container, extendTheme, Grid, GridItem, Heading, Icon, Image, LinkBox, Spacer, Text } from '@chakra-ui/react'
import styles from "../styles/middle.module.css"
import Navbar from './Navbar'
import ShowScrollTop from './ShowScrollTop'
import { Link } from '@chakra-ui/react'
import GitCal from './GitCal'
import { FaGithub } from "react-icons/fa";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const theme = extendTheme({ breakpoints })

function Middle() {

  const home = useRef(null);
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
      <Box style={{zoom:"0.9"}}>
        <Navbar
        home={home}
        about={about} 
        skills={skills} projects={projects}
        contact={contact} 
        scrollToPart={scrollToPart} 
        />
        
        <ShowScrollTop />
        <br />
        <Box ref={home} className={styles.hiiBoxOuter}>
          <Box className={styles.hiiBox} p={20} display={{ md: 'flex' }}>
          
          <Box backgroundColor='white.100' 
              width={{xl:"600px", lg:"500px", md:"300px", sm:"400px",base:"300px"}}
              p={3} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
              >
            <Text fontSize={['sm', 'md', 'lg', '3xl']}
              fontWeight='bold'
              color='black.100'
              mb={5}
            >
              Hii,
            </Text>
            <Text fontSize={['sm', 'md', 'lg', '4xl']}
              fontWeight='bold'
              color='black.100'
              mb={5}
            >
             I'm Ankit
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
          <Image  className={styles.portImage}
              borderRadius='full'
              width={{ sm: 60, md:200, lg:400 ,base:60}}
              src={process.env.PUBLIC_URL+"/port.jpg"}

            />
          </Box>
        </Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        <Box ref={about} className={styles.skillsHeading}
          backgroundColor="green.100" >
          <Heading className={styles.aboutText} size="lg" textAlign="start">ABOUT</Heading>
        </Box>

        <Box className={styles.about}>
          {/* About */}
          <Box className={styles.picSection} p={20} 
          // display={{ md: 'flex' }}
          >
          <Box flexShrink={0}>
            <Image
              borderRadius='full'
              // width={{ sm: "60px",md:"100px", lg:"200px" }}
              className={styles.picture}
              // h={{md:}}
              src='https://avatars.githubusercontent.com/u/101567851?v=4'

            />
            <Spacer></Spacer>
          </Box>
          
          <Box className={styles.helloSection} backgroundColor='green.100' 
              // width={{xl:"600px", lg:"500px", md:"300px", sm:"400px",base:"300px"}}
              // p={3} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
              >
            <Text fontSize={['md', 'md', 'lg', '3xl']}
              fontWeight='bold'
              color='black.100'
              mb={5}
            >
              Hello, 
            </Text>
            
            <Text fontSize={['lg', 'xl', '2xl', '5xl']}
              fontWeight='bold'
              fontFamily="sans-serif"
              letterSpacing='wide'
              color='teal.600'
              animation="ease-in"
            >
            I am <span color='grey'> Ankit </span>
            </Text>
            
            <Text fontSize={['md', 'lg', 'lg', '2xl']} animation="backwards" p={5} mt={0} color='gray.800'>
              An inspiring Full Stack Web Developer who is keen to get new experiance and ready to learn, ehnance and apply the skills.
            </Text>
            
            <Button className={styles.resumeBtn} onClick={handleClick} mt={35} color="white" backgroundColor='blue.500'>Resume</Button>

          </Box>
        </Box>
        </Box>
        <br />
        
        <Box ref={skills} className={styles.skillsHeading}
          backgroundColor="green.100" >
          <Heading className={styles.aboutText} size="lg" textAlign="start">SKILLS</Heading>
        </Box>
        
        <Box  className={styles.skills}>
          
          <br />
          <br />
          <Heading color="teal.600" fontWeight="semibold">Front-End</Heading>
          <br />
          <Grid gap={6} className={styles.skillsGrid}>
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/html-Image.png'/>
             <Heading size="md" margin="20px" >HTML</Heading> 
             </GridItem> 
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/css-logo.png'/>
             <Heading size="md" margin="20px" >CSS</Heading>
             </GridItem> 
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/js-logo.png'/>
             <Heading size="md" margin="20px" >JAVASCRIPT</Heading>
             </GridItem> 
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/react-icon.png'/>
             <Heading size="md" margin="20px" >REACT</Heading>
             </GridItem> 
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/redux-logo.png'/>
             <Heading size="md" margin="20px" >REDUX</Heading> 
             </GridItem> 
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/github-logo.png'/>
             <Heading size="md" margin="20px" >GITHUB</Heading> 
             </GridItem> 
            <GridItem className={styles.eachSkill} w='100%' h='20' >
            <Image m={"auto"} w="50px" h="50px" src='./Images/chakraui-logo.jpg'/>
             <Heading size="md" margin="20px" >CHAKRA UI</Heading>
             </GridItem> 
            
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          
          <Heading className={styles.backendHeading} color="teal.600" fontWeight="semibold">Back-End and Database</Heading>
          <br />
          <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.skillsGridBackend}>
            <GridItem className={styles.eachSkill} w='100%' h='20' >
             <Image m={"auto"} w="100px" h="60px" src='./Images/node-logo.png' />
             {/* <Heading size="md" margin="20px" >NODE</Heading>  */}
             
             </GridItem>
            <GridItem className={styles.eachSkill} w='100%' h='20' >
             <Image m={"auto"} w="100px" h="60px" src='./Images/express-js.png' />
             {/* <Heading size="md" margin="20px" >EXPRESS</Heading>  */}
             
             </GridItem>
            <GridItem className={styles.eachSkill} w='100%' h='20' >
             <Image m={"auto"} w="100px" h="60px" src='./Images/mongoDB-logo.jpg' />
             {/* <Heading size="md" margin="20px" >MONGODB</Heading>  */}
             
             </GridItem>
            
          </Grid>
        </Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          
        {/* Github stats */}
          <Box>
          <Box ref={projects} className={styles.skillsHeading}
          backgroundColor="green.100" >
          <Heading className={styles.aboutText} size="lg" textAlign="start"> GITHUB STATS & CALENDAR</Heading>
        </Box>
        {/* Github Calendar */}
          <Box className={styles.gitStats}>
              <Image className={styles.gitStatsImage} src="https://github-readme-stats.vercel.app/api?username=Ankit-yadav09&show_icons=true&count_private=true" alt="Ankit-yadav09" />
          
            <Box className={styles.gitCal}>
              <GitCal />
            </Box>
          </Box>
          </Box>

          
            
          <Box ref={projects} className={styles.skillsHeading}
          backgroundColor="green.100" >
          <Heading className={styles.aboutText} size="lg" textAlign="start">PROJECTS</Heading>
        </Box>
          <br />
        <Box className={styles.projects}>
          
          <Box className={styles.projectHead}>
          <Heading size="lg" margin="20px" color='teal.600'>ASOS-Clone</Heading> 
            <hr />
            <Text className={styles.projectDesc}>This is a clone of ASOS. ASOS is a British online fashion and cosmetic retailer. We can buy the latest fashion products for men and women both.</Text>
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
          <Heading size="lg" margin="20px" color='teal.600'>Banggood-Clone</Heading> 
            <hr />
            <Text className={styles.projectDesc}>This is a clone of Banggood. Banggood is a global leading direct-to-consumer online retailer, providing well-selected products that are highly cost-effective.</Text>
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
          <Heading size="lg" margin="20px" color='teal.600'>Kindmeal.my-Clone</Heading> 
            <hr />
            <Text className={styles.projectDesc}>It's a clone of KindMeal.my. KindMeal.my is Malaysia's leading meat-free lifestyle platform, indulging you with delicious vegetarian meals to save animals and the environment.</Text>
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

        <Box ref={contact} className={styles.skillsHeading}
          backgroundColor="green.100" >
          <Heading className={styles.aboutText} size="lg" textAlign="start"></Heading>
        </Box>

        <Box className={styles.contact}>
        <Link  href='https://github.com/Ankit-yadav09' isExternal>
          {/* <Heading size="md" >Github</Heading> */}
          <Icon fontSize={["22px","32px"]} as={FaGithub} />
        </Link>
        <br />
          <Heading size="md" >
            Email: <a>yadavankit46565@gmail.com</a> 
          </Heading>
          <br />
          <Heading size="md" >
            Contact No: +91 8307740489
          </Heading>
        </Box>
      </Box>
  )
}

export default Middle