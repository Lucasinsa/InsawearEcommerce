import React from 'react'
import ItemCount from './ItemCount'
import { useCounter } from '../hooks/useCounter'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const ItemDetail = ({ producto }) => {
  //Hook personalizado y variables del contexto del carrito
  const { decrementar, incrementar, cantidad } = useCounter(0,0,10)
  const { agregarAlCarrito, cart } = useContext(CartContext)

  //Control del máximo de productos a agregar
  const habilitacionBoton = () => {
    let habilitacion
    let productoEnCarrito = cart.find(productoCarrito=>productoCarrito.id === producto.id)
    if(productoEnCarrito){
      productoEnCarrito.stock - cantidad >= 0 ? habilitacion = true : habilitacion = false
    } else {
      habilitacion = true;
    }
    return habilitacion
  }

  return (
    <div className='item-detail'>
        <h1 className='nombre-producto'>{producto.nombre}</h1>
        <img src={producto.imagen} alt="Imagen del producto" />
        <div className='contenedor-informacion'>
            <div className='contenedor-informacion-detalles'>
                <p className='descripcion-producto'>{producto.descripcion}</p>
            </div>
        </div>
        <div className='seccion-agregar-carrito'>
            <h2>PRECIO: ${producto.precio ? producto.precio.toLocaleString() : producto.precio}</h2>
            <div className='contenedor-contador-carro'>
              <ItemCount decrementar={decrementar} incrementar={incrementar} cantidad={cantidad} />
              <button 
                className={habilitacionBoton() ? 'boton-agregar-carrito':'boton-deshabilitado'}
                onClick={()=>{agregarAlCarrito(producto, cantidad)}}
                disabled = {!habilitacionBoton()}
              >
                {habilitacionBoton() ? "Agregar al Carrito" : "Máximo alcanzado" }
              </button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail