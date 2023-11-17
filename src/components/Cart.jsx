import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import ProductosCarritoContainer from './ProductosCarritoContainer'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart,cantidadEnCarrito,precioTotalEnCarrito, vaciarCarrito } = useContext(CartContext);

  //Efectos secundarios cuando se monta el componente
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className='seccion-carrito'>
      <div>
        <h1 className='titulo-seccion-carrito'>CARRITO DE COMPRAS</h1>
        <h2>Chequeá tus productos antes de finalizar la compra.</h2>
      </div>
      <div>
        {cantidadEnCarrito !== 0  ? (
          <>
            <ProductosCarritoContainer cart={cart}/>
            <div className='contenedor-comprar'>
              <h4 className='precio-total'>Precio total: ${precioTotalEnCarrito.toLocaleString()}</h4>
              <div>
                <button className='boton-vaciar' onClick={()=>{vaciarCarrito()}}>VACIAR CARRITO</button>
                <Link to={"/finalizar-compra"}>
                  <button className='boton-comprar'>COMPRAR</button>
                </Link> 
              </div>
            </div>
          </>
        ):(
          <>
            <h1 className='sin-productos'>No hay productos en el carrito.</h1>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart