import { Container, Flex, VStack } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" />
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50" />
      </Flex>
    </Container>
  );
}

export default App;
