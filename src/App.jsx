import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import Locales from "./components/Locales"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import RutaNoEncontrada from "./components/RutaNoEncontrada"
import CartProvider from "./context/cartContext"
import { Toaster } from "sonner"
import FinalizarCompra from "./components/FinalizarCompra"

function App() {
  return (
    <CartProvider>
      <Toaster/>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/locales' element={<Locales />}/>
          <Route exact path='/cart' element={<Cart />}/>
          <Route exact path='/finalizar-compra' element={<FinalizarCompra />}/>
          <Route path='*' element={<RutaNoEncontrada />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App