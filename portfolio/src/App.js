import logo from './logo.svg';
import './App.css';
import { Flex, Heading, VStack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    // <div className="App">
      
      <VStack padding={5}bg="grey">
        <Flex width="100%" bg="orange.400">
          <Heading
          ml="8"  size="md" fontWeight="semibold" color="cyan.400"
          >
            Ankit
          </Heading>
        </Flex>
        <Navbar/>
        <Profile/>
      </VStack>
    // </div>
  );
}

export default App;
