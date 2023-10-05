import { ChakraProvider } from "@chakra-ui/react"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return(
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda de ropa Insawear!" />
    </ChakraProvider>
  )
}

export default App
