import React from 'react'
import ProductoCarrito from './ProductoCarrito'

const ProductosCarritoContainer = ({ cart }) => {
  return (
    <ul className='contenedor-flex'>
        {cart.map(producto=> {
          return (
            <li key={producto.id}>
              <ProductoCarrito producto={producto} />
            </li>
          )
        })}
    </ul>
  )
}

export default ProductosCarritoContainer