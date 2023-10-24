import React from 'react'
import { useCounter } from '../hooks/useCounter'

const ItemCount = () => {
  const {decrementar, incrementar, cantidad} = useCounter(0,0,10)

  return (
    <div className='contenedor-contador'>
        <div className='contador'>
            <button onClick={decrementar}>-</button>
            <p className='numero-contador'>{cantidad}</p>
            <button onClick={incrementar}>+</button>
        </div>
        <button className='boton-agregar-carrito' onClick={()=>{console.log(`Agregados ${cantidad} productos.`)}}>
          Agregar al carrito
        </button>
    </div>
  )
}

export default ItemCount