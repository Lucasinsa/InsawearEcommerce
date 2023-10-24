import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ imagen,nombre,precio,id }) => {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} alt={`Producto ${id}`}/>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">${precio.toLocaleString()}</Card.Subtitle>
            <Button className='boton-ver-detalle'>
              <Link to={`/item/${id}`}>  
                Ver detalle
              </Link>
            </Button>
        </Card.Body>
      </Card>
  )
}

export default Item