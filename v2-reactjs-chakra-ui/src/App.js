import "./App.css";
import {
  Heading,
  Text,
  Button,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaReact, FaSass,} from "react-icons/fa";
import { useEffect } from "react";
import TextLoop from "react-text-loop";
import { Server, Terminal, Database } from 'react-feather';

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
            Hi<span style={{ fontSize:"0.80em", position: "relative", bottom:"10px"}}>👋</span> I'm
          </Heading>
        ) : (
          <Heading
            as="h1"
            className="hi"
            size="4xl"
            fontWeight="700"
            style={{ letterSpacing: "-0.1rem", color: "white" }}
          >
            Hi<span style={{ fontSize:"0.80em", position: "relative", bottom:"10px"}}>👋</span> I'm
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
          className="designation"
        >
          Web Frontend Dev{" "}
          <span className="heart" id="heart" onClick={toggleColorMode} style={{ cursor: "pointer" }}>
            {colorMode === "light" ? " 🤍" : " ❤"}
          </span>{" "}
           & Problem Solver!
        </Text>
        <Text mb={6}>
          <TextLoop>
            <span className="fuck"> 
              <Text color="gray.500">
                I use C++&nbsp;
              </Text>
              <Terminal style={{transform:'skewX(-15deg)'}} size={18} />
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
              <Database style={{transform:'skewX(-15deg)'}} size={17} />
            </span>
            <span className="fuck">
              <Text color="gray.500">I use Netlify&nbsp;</Text>
              <Server style={{transform:'skewX(-15deg)'}} size={17} />
            </span>
          </TextLoop>
        </Text>
        <HStack>
          <a href="https://github.com/theiconik" alt="GitHub"><Button colorScheme="gray" leftIcon={<FaGithub />}>
            Github
          </Button></a>
          <a href="mailto:kumarujjawal51@gmail.com" alt="Email"><Button colorScheme="red" leftIcon={<FaEnvelope />}>
            Gmail
          </Button></a>
          <a href="https://linkedin.com/in/theiconik" alt="LinkedIn"><Button colorScheme="blue" leftIcon={<FaLinkedinIn />}>
            LinkedIn
          </Button></a>
        </HStack>
      </div>
    </div>
  );
}

export default App;
