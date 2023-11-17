import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

//Creo y exporto el contexto del carrito de compras
export const CartContext = createContext([])

const CartProvider = ({ children }) => {
    //Estado del carrito con función modificadora
    //-El estado inicial puede ser el almacenado en Local Storage si existe, o un array vacío
    const [cart, setCart] = useState(() => {
        const carritoLS = JSON.parse(localStorage.getItem("Carrito")) || [];
        return carritoLS;
    });

    //Efecto secundario cada vez que el estado del carrito cambia
    useEffect(() => localStorage.setItem("Carrito", JSON.stringify(cart)), [cart]);

    //Cantidad total de productos en carrito
    let cantidadEnCarrito = cart.reduce((acc,producto)=> acc + producto.cantidadEnCarrito, 0)

    //Función que muestra el precio total
    let precioTotalEnCarrito = cart.reduce((acc,producto)=> acc + (producto.cantidadEnCarrito*producto.precio), 0)

    //Devuelve cantidad en carrito de un producto
    let cantidadProductoEnCarrito = id => {
        let productoAconsultar = cart.find(productoEnCarro=>productoEnCarro.id === id)
        return parseFloat(productoAconsultar.cantidadEnCarrito)
    }

    //Función que determina si un producto ya está en el carrito
    const estaEnCarrito = id => {
        let encontrado
        cart.find(producto => producto.id === id) ? encontrado = true : encontrado = false
        return encontrado
    }

    //Función que agrega al carrito un producto nuevo, o actualiza el stock y cantidad de uno ya existente
    const agregarAlCarrito = (producto, cantidad) => {
        if(cantidad != 0){
            if(estaEnCarrito(producto.id)) {
                let indexProducto = cart.findIndex(productoGuardado=> productoGuardado.id === producto.id)
                let carritoActualizado = [...cart]
                if(carritoActualizado[indexProducto].stock - cantidad >= 0){
                    carritoActualizado[indexProducto].stock -= cantidad
                    carritoActualizado[indexProducto].cantidadEnCarrito += cantidad
                    setCart(carritoActualizado)
                }
            } else {
                if(producto.stock - cantidad >= 0) {
                    setCart(prev => [...prev, {...producto, cantidadEnCarrito: cantidad, stock: producto.stock - cantidad}])
                }
            }
            toast.success('Producto agregado')
        }
    }

    //Función que remueve una unidad de un producto
    const removerItem = id => {
        let indexProducto = cart.findIndex(productoGuardado=> productoGuardado.id === id)
        let carritoActualizado = [...cart]
        carritoActualizado[indexProducto].stock ++
        carritoActualizado[indexProducto].cantidadEnCarrito --
        setCart(carritoActualizado)
    }

    //Función que agrega una unidad de un producto
    const agregarItem = id => {
        let indexProducto = cart.findIndex(productoGuardado=>productoGuardado.id === id)
        let carritoActualizado = [...cart]
        carritoActualizado[indexProducto].stock --
        carritoActualizado[indexProducto].cantidadEnCarrito ++
        setCart(carritoActualizado)
    }

    //Función que elimina todas las unidades de un producto
    const eliminarProducto = id => {
        let carritoActualizado = cart.filter(productoGuardado=> productoGuardado.id !== id)
        setCart(carritoActualizado)
        toast.success('Producto eliminado')
    }

    //Función que vacía el carrito
    const vaciarCarrito = () => {
        setCart([])
        toast.success('Carrito vaciado')
    }

    return (
        <CartContext.Provider value={{ cart, setCart, cantidadEnCarrito, precioTotalEnCarrito, agregarAlCarrito, removerItem, agregarItem, vaciarCarrito, cantidadProductoEnCarrito, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider