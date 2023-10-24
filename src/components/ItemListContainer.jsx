import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import RenderCategoria from './RenderCategoria'
import { Spinner } from 'react-bootstrap'
import { getProducts } from '../mocks/asyncMock'
import Presentacion from './Presentacion'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState()
  const { categoryId } = useParams()

  useEffect(()=>{
    setCargando(true)
    setTimeout(()=>{
      getProducts()
      .then(productos=>{
        const productosFiltradosPorCategoria = productos.filter(producto=>producto.categoria === categoryId)
        productosFiltradosPorCategoria.length !== 0 ? setProductos(productosFiltradosPorCategoria) : setProductos(productos)
        setCargando(false)
      })
    },800)
  }, [categoryId])

  return (
    <>
      {categoryId === undefined && <Presentacion />}
      <div className={categoryId ? 'item-list-container' : 'item-list-container-inicio'}>
        <div className='categoria-actual'>
          <RenderCategoria categoryId={categoryId} />
        </div>
        <div className='lista-productos'>
          {cargando ? (
            <Spinner animation="border" variant="light" />
          ) : (
            <ItemList productos={productos} />
          )}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer