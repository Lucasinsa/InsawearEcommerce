import React, { useEffect,useState } from 'react'
import { collection, addDoc, getFirestore} from 'firebase/firestore';
import { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2';
import Resumen from './Resumen';

const FinalizarCompra = () => {
  //Estados y sus funciones modificadoras
  const [nombre, setNombre] = useState('')
  const [numero, setNumero] = useState('')
  const [mail, setMail] = useState('')
  const [nombreError, setNombreError] = useState('')
  const [numeroError, setNumeroError] = useState('')
  const [mailError, setMailError] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [compraRealizada, setCompraRealizada] = useState(false)
  const [copiaCarrito, setCopiaCarrito] = useState([])
  const [copiaTotal, setCopiaTotal] = useState('')

  //Obtengo el carrito y el importe total
  const { cart, setCart, precioTotalEnCarrito } = useContext(CartContext)

  //Funciones de validación que muestran el error en pantalla
  const validarNombre = () => setNombreError(nombre.trim() === '' ? 'El nombre es requerido' : '')
  const validarNumero = () => setNumeroError(numero.trim() === '' ? 'El número telefónico es requerido' : '');
  const validarMail = () => setMailError(mail.trim() === '' ? 'El mail es requerido' : '');

  //Dirigir a las coordenadas (0,0) cuando se monta el componente
  useEffect(()=>{
      window.scrollTo(0, 0);
  },[compraRealizada])

  //Comunicación con la base de datos
  const db = getFirestore()
  const ordersCollection = collection(db, "ordenes")

  //Propiedades de la orden a generar
  const order = {
    buyer: {
      nombre,
      mail,
      numero
    },
    productos: cart.map(producto => ({
      id: producto.id,      
      imagen: producto.imagen,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      categoria: producto.categoria,
      precio: producto.precio,
      cantidadEnCarrito: producto.cantidadEnCarrito
    })),
    importeTotal: precioTotalEnCarrito,
    fecha: new Date().toLocaleString()
  };

  //Evento que ocurre al enviar formulario / realizar compra
  const handleSubmit = (e) => {
    //Validaciones
    e.preventDefault();
    validarNombre();
    validarNumero();
    validarMail();

    if (nombre.trim() !== '' && numero.trim() !== '' && mail.trim() !== '' && cart.length !== 0) {
      // Mostrar mensaje de confirmación
      Swal.fire({
        title: '¿Estás seguro de confirmar la compra?',
        text: 'No podrás volver atrás.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, confirmar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, se sube la orden a la base de datos y se recupera el id de la orden
          addDoc(ordersCollection, order)
            .then(({ id }) => {
              setOrderId(id);
              setCopiaCarrito([...cart])
              setCopiaTotal(precioTotalEnCarrito)
              setCart([])
              setCompraRealizada(true)
            })
          Swal.fire({
            title: "Compra realizada!",
            text: "A continuación verás tu resumen.",
            icon: "success",
            confirmButtonColor: "#000",
          })
        }
      });
    }
  };
  
  return (
    <div className='seccion-finalizar-compra'>
      {!compraRealizada ? (
        <>
          <div>
            <h1 className='titulo-seccion-finalizar-compra'>FINALIZAR COMPRA</h1>
            <h2>Completá el formulario y recibí tu número de orden.</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre-y-apellido">Nombre y apellido</label>
            <input type="text" placeholder='Nombre y apellido' name='nombre-y-apellido' onChange={e=> setNombre(e.target.value)}/>
            {nombreError && <p className="error-mensaje">{nombreError}</p>}
            <label htmlFor="numero-telefonico">Número telefónico</label>
            <input type="number" placeholder='Número telefónico' name='numero-telefonico' onChange={e=> setNumero(e.target.value)}/>
            {numeroError && <p className="error-mensaje">{numeroError}</p>}
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' name='email' onChange={e=> setMail(e.target.value)}/>
            {mailError && <p className="error-mensaje">{mailError}</p>}
            <button type='submit'>Finalizar compra</button>
          </form>
        </>
      ) : (
        <>
          <Resumen copiaCarrito={copiaCarrito} copiaTotal={copiaTotal} orderId={orderId}/>
        </>
      )}
    </div>
  )
}

export default FinalizarCompra