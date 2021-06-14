import "./App.css";
import { ChakraProvider, Heading, Text, Button, HStack } from "@chakra-ui/react";
import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="content">
          <Heading
            as="h1"
            size="4xl"
            fontWeight="700"
            color="#2d3748"
            style={{ letterSpacing: "-0.1rem" }}
          >
            Hi, I'm
          </Heading>
          <Heading
            className="name"
            as="h1"
            size="4xl"
            color="#319795"
            fontWeight="700"
            style={{ letterSpacing: "-0.1rem" }}
          >
            Ujjawal Pandey
          </Heading>
          <Text fontSize="lg" color="gray.500" mt={12} mb={6} style={{textAlign: "center"}}>
            Web Frontend Dev & 🤍 problem solving
          </Text>
          <HStack>
            <Button colorScheme="blackAlpha" leftIcon={<FaGithub />}>
              Github
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
            <Button colorScheme="blue" leftIcon={<FaLinkedinIn />}>
              LinkedIn
            </Button>
          </HStack>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
