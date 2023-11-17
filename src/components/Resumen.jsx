import React from 'react'
import { Link } from 'react-router-dom'

const Resumen = ({ copiaCarrito, copiaTotal, orderId }) => {
  return (
    <>
        <div>
            <h1 className='titulo-seccion-finalizar-compra'>Resumen</h1>
            <h2>Anotá tu número de orden.</h2>
        </div>
        <div className='contenedor-resumen'>
            <h3>PRODUCTOS</h3>
            <ol>
                {copiaCarrito.map(producto=>{
                  return <li key={producto.id}>{producto.nombre} x {producto.cantidadEnCarrito} --- ${(producto.cantidadEnCarrito * producto.precio).toLocaleString()}</li>
                })}
            </ol>
            <h4>IMPORTE TOTAL: <span>${copiaTotal.toLocaleString()}</span></h4>
            <h5>NÚMERO DE ORDEN: <span>{orderId}</span></h5>
        </div>
        <div className='contenedor-boton-inicio'>
            <Link to={"/"}><button className='boton-inicio'>Volver a inicio</button></Link>
        </div>
    </>
  )
}

export default Resumen