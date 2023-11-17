import React from 'react'

const ItemCount = ({decrementar, incrementar, cantidad, decrementarProducto, incrementarProducto}) => {
  //Función decremento
  const decremento = () => {
    if(cantidad > 1){
      decrementar()
      decrementarProducto && decrementarProducto()
    }
  }
  
  //Función incremento
  const incremento = () => {
    if(cantidad <= 9){
      incrementar()
      incrementarProducto && incrementarProducto()
    }
  }
  
  return (
    <div className='contenedor-contador'>
        <div className={!incrementarProducto ? 'contador' : 'counter-carrito'}>
            <button onClick={decremento}>-</button>
            <p className='numero-contador'>{cantidad}</p>
            <button onClick={incremento}>+</button>
        </div>
    </div>
  )
}

export default ItemCount