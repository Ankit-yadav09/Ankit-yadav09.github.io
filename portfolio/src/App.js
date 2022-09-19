import logo from './logo.svg';
import './App.css';
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import Profile from './components/Profile';
// import Navbar from './components/Navbar';
import Middle from './components/Middle';

function App() {
  return (
      
      <VStack padding={5}>
        {/* <Navbar/> */}
        <Middle/>
        <Profile/>
      </VStack>

  );
}

export default App;
