import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} minH="100vh">
        {/* Sidebar */}
        <Box
          w={{ base: "100%", md: "20%" }}
          bg="gray.800"
          color="white"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h1" size="lg" mb={6}>
            My Blog
          </Heading>
          <VStack spacing={4} align="stretch" w="full">
            <Link href="#" display="flex" alignItems="center">
              <FaHome />
              <Text ml={2}>Home</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaUser />
              <Text ml={2}>About</Text>
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <FaEnvelope />
              <Text ml={2}>Contact</Text>
            </Link>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box w={{ base: "100%", md: "60%" }} p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Welcome to My Blog
          </Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Blog Post Title 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Blog Post Title 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar Widgets */}
        <Box
          w={{ base: "100%", md: "20%" }}
          bg="gray.100"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h3" size="md" mb={4}>
            About Me
          </Heading>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Text textAlign="center">
            Hi, I'm a blogger passionate about sharing my thoughts and experiences with the world.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;