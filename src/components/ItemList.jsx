import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <ul className='grilla-productos'>
        {productos.map(producto=> {
          return (
            <li key={producto.id}>
              <Item imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} id={producto.id} />
            </li>
          )
        })}
    </ul>
  )
}

export default React.memo(ItemList)