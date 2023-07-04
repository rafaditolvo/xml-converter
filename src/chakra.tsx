import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  // Adicione aqui as customizações do tema, se necessário
});

const Chakra: React.FC = ({ children }: React.PropsWithChildren<{}>) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
  

export default Chakra;
