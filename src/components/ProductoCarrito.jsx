import React from 'react'
import ItemCount from './ItemCount'
import { useCounter } from '../hooks/useCounter'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const ProductoCarrito = ({ producto }) => {
  //Variables del contexto del carrito y uso de hook personalizado
  const {cantidadProductoEnCarrito,removerItem,agregarItem,eliminarProducto } = useContext(CartContext)
  const {decrementar, incrementar, cantidad} = useCounter(cantidadProductoEnCarrito(producto.id),1,10)

  //Función para quitar una unidad de un producto
  const decrementarProducto = () => removerItem(producto.id)
  
  //Función para incrementar una unidad de un producto
  const incrementarProducto = () => agregarItem(producto.id)
  
  return (
    <div className='card-carrito'>
        <img src={producto.imagen} alt={`Producto ${producto.id}`}/>
        <div className='contenedor-derecho'>
            <div className='contenedor-precio-nombre'>
                <h3 className='nombre-card-carrito'>{producto.nombre}</h3>
                <h4 className='precio-card-carrito'>${(producto.precio * cantidad).toLocaleString()}</h4>
            </div>
            <div className='contenedor-botones'>
                <ItemCount decrementar={decrementar} incrementar={incrementar} cantidad={cantidad} decrementarProducto={decrementarProducto} incrementarProducto={incrementarProducto}/>
                <button className='boton-borrar-producto' onClick={()=>{eliminarProducto(producto.id)}}>&#x1F5D1;</button>
            </div>
        </div>
    </div>
  )
}

export default ProductoCarrito