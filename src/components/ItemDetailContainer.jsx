import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { getProducts } from '../mocks/asyncMock'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState()
    const { id } = useParams()

    useEffect(()=>{
        setCargando(true)
        setTimeout(()=>{
          getProducts().then(productos=>{
            const productoSeleccionado = productos.find(product=>product.id === id)
            productoSeleccionado && setProducto(productoSeleccionado)
            setCargando(false)
          })
        },800)
    }, [id])

  return (
        <div className='item-detail-container'>
            {
                cargando ? 
                (<Spinner animation="border" />) : 
                (<ItemDetail producto={producto}/>)
            }
        </div>
  )
}

export default ItemDetailContainer