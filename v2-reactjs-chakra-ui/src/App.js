import "./App.css";
import { Heading, Text, Button, HStack, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    console.log("Tap on the heart for dark mode!");
  }, []);
  return (
    <div className="App">
      <div className="content">
        <Heading
          as="h1"
          size="4xl"
          fontWeight="700"
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
        <Text
          fontSize="lg"
          color="gray.500"
          mt={12}
          mb={6}
          style={{ textAlign: "center" }}
        >
          Web Frontend Dev &{" "}
          <span onClick={toggleColorMode} style={{cursor: "pointer"}}>
            {colorMode  === 'light' ? '🤍' : '👨‍💻'} 
          </span>{" "}
          problem solving
        </Text>
        <HStack>
          <Button colorScheme="gray" leftIcon={<FaGithub />}>
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
  );
}

export default App;
