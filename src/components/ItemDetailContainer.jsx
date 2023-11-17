import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
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
  const [producto, setProducto] = useState([])
  const [cargando, setCargando] = useState()
  const [idExiste, setIdExiste] = useState(true)
  const { id } = useParams()

  //Efectos secundarios al cambiar el id
  useEffect(()=>{
      window.scrollTo(0, 0);
      setCargando(true)

      //Comunicación con la base de datos
      const db = getFirestore()
      const oneItem = doc(db, "productos", `${id}`)

      getDoc(oneItem).then(snapshot => {
        if(snapshot.exists()) {
          const productoData = snapshot.data()
          const productoConId = {
            id: snapshot.id,
            ...productoData
          }
          const productoTransformado = new Producto(productoConId.id, productoConId.imagen, productoConId.nombre, productoConId.descripcion, productoConId.categoria, productoConId.precio, productoConId.stock, productoConId.cantidadEnCarrito)
          setProducto(productoTransformado)
          setCargando(false)
        } else {
          setIdExiste(false)
        }
      })
  }, [id])

  return (
    <div className={idExiste ? 'item-detail-container' : 'contenedor-no-id'}>
      {idExiste ? (
        <>
          {cargando ? 
          (<Spinner animation="border" />) : 
          (<ItemDetail producto={producto}/>)
          }
        </>
      ) : (
        <>
          <h1 className='no-id'>El producto no existe o fue retirado</h1>
        </>
      )
      }      
    </div>
  )
}

export default ItemDetailContainer