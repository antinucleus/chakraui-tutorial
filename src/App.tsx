import { Container, Flex } from '@chakra-ui/react';

import Cart from './sections/cart';
import Details from './sections/details';
import './App.css';

function App() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
