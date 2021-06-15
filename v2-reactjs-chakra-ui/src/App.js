import "./App.css";
import {
  Heading,
  Text,
  Button,
  HStack,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaReact, FaSass, FaDatabase, FaTerminal, FaServer } from "react-icons/fa";
import { useEffect } from "react";
import TextLoop from "react-text-loop";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    console.log("Tap on the heart for dark mode!");
  }, []);
  return (
    <div className="App">
      <div className="content">
        {colorMode === "light" ? (
          <Heading
            as="h1"
            size="4xl"
            fontWeight="700"
            style={{ letterSpacing: "-0.1rem", color: "#2d3748" }}
          >
            Hi, I'm
          </Heading>
        ) : (
          <Heading
            as="h1"
            size="4xl"
            fontWeight="700"
            style={{ letterSpacing: "-0.1rem", color: "white" }}
          >
            Hi, I'm
          </Heading>
        )}
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
          style={{ textAlign: "center" }}
        >
          Web Frontend Dev &{" "}
          <span onClick={toggleColorMode} style={{ cursor: "pointer" }}>
            {colorMode === "light" ? " 🤍" : " 👨‍💻"}
          </span>{" "}
          problem solving
        </Text>
        <Text mb={6}>
          <TextLoop>
            <span className="fuck"> 
              <Text color="gray.500">
                I use C++&nbsp;
              </Text>
              <FaTerminal style={{transform:'skewX(-15deg)'}} size={18} />
            </span>
            <span className="fuck">
              <Text color="gray.500">I use Reactjs&nbsp;</Text>
              <FaReact style={{transform:'skewX(-15deg)'}} size={18} />
            </span>
            <span className="fuck">
              <Text color="gray.500">I use Sass&nbsp;</Text>
              <FaSass size={18} />
            </span>
            <span className="fuck">
              <Text color="gray.500">I use PostgreSQL&nbsp;</Text>
              <FaDatabase style={{transform:'skewX(-15deg)'}} size={18} />
            </span>
            <span className="fuck">
              <Text color="gray.500">I use Netlify&nbsp;</Text>
              <FaServer style={{transform:'skewX(-15deg)'}} size={18} />
            </span>
          </TextLoop>
        </Text>
        <HStack>
          <Button colorScheme="gray" leftIcon={<FaGithub />}>
            Github
          </Button>
          <Button colorScheme="red" leftIcon={<FaEnvelope />}>
            Gmail
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
