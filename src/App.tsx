import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box className="App">
      <header className="App-header">
      </header>
    </Box>
    </ChakraProvider>

  );
}

export default App;
