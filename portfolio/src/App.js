import logo from './logo.svg';
import './App.css';
import { Flex, Heading, VStack } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      
      <VStack padding={5}>
        <Flex width="100%">
          <Heading
          ml="8" size="md" fontWeight="semibold" color="cyan.400"
          >
            Ankit here
          </Heading>
        </Flex>
      </VStack>
    </div>
  );
}

export default App;
