import { Box, Circle, Flex, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {

const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
        <Circle position="absolute" alignSelf="flex-end" bg="orange.100" opacity="0.1" 
        width="300px" height="300px" />

        <Flex direction={isNotSmallScreen ? "row" : "column"}
        spacing="200px" padding={isNotSmallScreen ? "32" : "0"}
        alignSelf="flex-start" >

        <Box mt={isNotSmallScreen ? "0" : 16} align="flex-start" >
            <Text>Hello, I am</Text>
            <Text>Ankit</Text>
            <Text>FSWD</Text>
            <Text>Responsive work Started</Text>
        </Box>

        <Image alignSelf="center" 
        mt={isNotSmallScreen ? "0" : "30"}
        mb={isNotSmallScreen ? "0" : "12"} borderRadius="full"
        // bgColor="transparent" 
        boxShadow="lg" 
        boxSize="300px"
        src="https://avatars.githubusercontent.com/u/101567851?v=4" />

        </Flex>
    </Stack>
  )
}

export default Navbar