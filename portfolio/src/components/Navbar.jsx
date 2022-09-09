import { Box, Circle, Flex, Stack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {

const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
        <Circle position="absolute" alignSelf="flex-end" bg="orange.100" opacity="0.1" width="300px" height="300px" />

        <Flex direction={isNotSmallScreen ? "row" : "column"}
        spacing="200px" padding={isNotSmallScreen ? "30" : "0"}
        alignSelf="flex-start" >

        <Box mt={isNotSmallScreen ? "0" : 16} align="flex-start" >

        </Box>

        </Flex>
    </Stack>
  )
}

export default Navbar