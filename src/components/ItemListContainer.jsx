import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import RenderCategoria from './RenderCategoria'
import { Spinner } from 'react-bootstrap'
import Presentacion from './Presentacion'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  //Clase para los productos
  class Producto {
    constructor(id,imagen,nombre,descripcion,categoria,precio,stock,cantidadEnCarrito){
      this.id = id
      this.imagen = imagen
      this.nombre = nombre
      this.descripcion = descripcion
      this.categoria = categoria
      this.precio = precio
      this.stock = stock
      this.cantidadEnCarrito = cantidadEnCarrito
    }
  }
  
  //Estados y funciones modificadoras
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState()
  const { categoryId } = useParams()

  //Efectos secundarios al cambiar la categoría
  useEffect(()=>{
    window.scrollTo(0, 0);
    setCargando(true)

    //Comunicación con la base de datos
    const db = getFirestore()
    const itemsCollection = collection(db, "productos")

    getDocs(itemsCollection).then(snapshot => {
      const docs = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data
        }
      })
      const productosTransformados = docs.map(producto => {
        return new Producto(producto.id, producto.imagen, producto.nombre, producto.descripcion, producto.categoria, producto.precio, producto.stock, producto.cantidadEnCarrito)
      })
      const productosFiltradosPorCategoria = productosTransformados.filter(producto=> producto.categoria === categoryId)
      productosFiltradosPorCategoria.length !== 0 ? setProductos(productosFiltradosPorCategoria) : setProductos(docs)
      setCargando(false)
    })
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