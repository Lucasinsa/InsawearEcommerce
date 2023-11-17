import React, { useEffect } from 'react'

const Locales = () => {
  //Efecto secundario al montarse el componente
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className='seccion-locales'>
      <div>
        <h1 className='titulo-seccion-carrito'>LOCALES</h1>
        <h2>Podés visitarnos en estos locales.</h2>
      </div>
      <ul className='contenedor-flex'>
          <li>
            <div className='card-carrito'>
              <img src='https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fsucursal-1.jpg?alt=media&token=f1855896-d7b9-448b-bcce-54d5e797414b' alt='Sucursal 1'/>
              <div className='contenedor-derecho'>
                <div className='contenedor-precio-nombre'>
                  <h3 className='nombre-card-carrito'>INSAWEAR ALMAGRO</h3>
                  <h4 className='precio-card-carrito'>Bulnes 346, Almagro</h4>
                </div>
                <div className='contenedor-botones'>
                  <a href="https://www.google.com/maps" target='_blank'>
                    <button className='boton-g-maps'>Google Maps</button>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='card-carrito'>
              <img src='https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fsucursal-2.jpg?alt=media&token=ad32d0a4-7c21-4042-96a2-446aef5c169a' alt='Sucursal 2'/>
              <div className='contenedor-derecho'>
                <div className='contenedor-precio-nombre'>
                  <h3 className='nombre-card-carrito'>INSAWEAR BOEDO</h3>
                  <h4 className='precio-card-carrito'>Pavón 3831, Boedo</h4>
                </div>
                <div className='contenedor-botones'>
                  <a href="https://www.google.com/maps" target='_blank'>
                    <button className='boton-g-maps'>Google Maps</button>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='card-carrito'>
              <img src='https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fsucursal-3.jpg?alt=media&token=d566a52b-d37f-4cb3-bb9b-e23ac583e421' alt='Sucursal 3'/>
              <div className='contenedor-derecho'>
                <div className='contenedor-precio-nombre'>
                  <h3 className='nombre-card-carrito'>INSAWEAR LANÚS</h3>
                  <h4 className='precio-card-carrito'>Iberlucea 2814, Lanus oeste</h4>
                </div>
                <div className='contenedor-botones'>
                  <a href="https://www.google.com/maps" target='_blank'>
                    <button className='boton-g-maps'>Google Maps</button>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='card-carrito'>
              <img src='https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fsucursal-4.jpg?alt=media&token=b20d0c78-8880-47be-89ae-87f7f63a4cb3' alt='Sucursal 4'/>
              <div className='contenedor-derecho'>
                <div className='contenedor-precio-nombre'>
                  <h3 className='nombre-card-carrito'>INSAWEAR PALERMO</h3>
                  <h4 className='precio-card-carrito'>Serrano 1431, Palermo</h4>
                </div>
                <div className='contenedor-botones'>
                  <a href="https://www.google.com/maps" target='_blank'>
                    <button className='boton-g-maps'>Google Maps</button>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Locales