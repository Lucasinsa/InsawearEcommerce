import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {
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
            <ItemCount />
        </div>
    </div>
  )
}

export default ItemDetail